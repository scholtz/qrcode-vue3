import getMode from '../tools/getMode'
import mergeDeep from '../tools/merge'
import downloadURI from '../tools/downloadURI'
import QRCanvas from './QRCanvas'
import defaultOptions, { type Options, type RequiredOptions } from './QROptions'
import sanitizeOptions from '../tools/sanitizeOptions'
import type { Extension, QRCode } from '../types'
import qrcode from 'qrcode-generator'

type DownloadOptions = {
  name?: string;
  extension?: Extension;
};

export default class QRCodeStyling {
  _options: RequiredOptions;
  _container?: HTMLElement;
  _canvas?: QRCanvas;
  _qr?: QRCode;
  _drawingPromise?: Promise<void>;

  constructor (options?: Partial<Options>) {
    this._options = options ? sanitizeOptions(mergeDeep(defaultOptions, options) as RequiredOptions) : defaultOptions
    this.update()
  }

  static _clearContainer (container?: HTMLElement): void {
    if (container) {
      container.innerHTML = ''
    }
  }

  update (options?: Partial<Options>): void {
    QRCodeStyling._clearContainer(this._container)
    this._options = options ? sanitizeOptions(mergeDeep(this._options, options) as RequiredOptions) : this._options

    if (!this._options.data) {
      return
    }

    this._qr = <QRCode>qrcode(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel)
    this._qr.addData(this._options.data, this._options.qrOptions.mode || getMode(this._options.data))
    this._qr.make()
    this._canvas = new QRCanvas(this._options)
    this._drawingPromise = this._canvas.drawQR(this._qr)
    this.append(this._container)
  }

  append (container?: HTMLElement): void {
    if (!container) {
      return
    }

    if (typeof container.appendChild !== 'function') {
      // eslint-disable-next-line no-throw-literal
      throw 'Container should be a single DOM node'
    }

    if (this._canvas) {
      container.appendChild(this._canvas.getCanvas())
    }

    this._container = container
  }

  async getImageUrl (extension: string): Promise<string> {
    if (!this._drawingPromise) return ''

    const getImageUrl = await this._drawingPromise
    if (getImageUrl === undefined) {
      if (!this._canvas) return ''
      const data = this._canvas.getCanvas().toDataURL(`image/${extension}`)
      return data
    }
    return ''
  }

  download (downloadOptions?: Partial<DownloadOptions>): void {
    if (!this._drawingPromise) return

    void this._drawingPromise.then(() => {
      if (!this._canvas) return
      const opt = <DownloadOptions>downloadOptions
      const extension = opt.extension || 'png'
      const name = opt.name || 'qr'
      const data = this._canvas.getCanvas().toDataURL(`image/${extension}`)
      downloadURI(data, `${name}.${extension}`)
    })
  }
}
