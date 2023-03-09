[![Known Vulnerabilities](https://snyk.io/test/github/scholtz/qrcode-vue3/badge.svg)](https://snyk.io/test/github/scholtz/qrcode-vue3)

# Vue3 QR Code Styling

[![Version](https://img.shields.io/npm/v/qrcode-vue3.svg)](https://www.npmjs.org/package/qrcode-vue3)

JavaScript library for generating QR codes with a logo and styling.

this clone copy of https://qr-code-styling.com

If you have issues / suggestions / notes / questions, please open an issue or contact me. Let's create a cool library together.

### Examples

<p float="left">
<img style="display:inline-block" src="https://raw.githubusercontent.com/scholtz/qrcode-vue3/master/src/assets/qr_code_example.png" width="240" />
<img style="display:inline-block" src="https://raw.githubusercontent.com/scholtz/qrcode-vue3/master/src/assets/telegram_example_new.png" width="240" />
</p>

### Installation

```
npm install qr-code-generator-vue3 --save
```

### QR Code Scanner
If you are looking for QR code reader, see [qrcode-reader-vue3](https://github.com/scholtz/qrcode-reader-vue3/) project
```bash
npm install --save qrcode-reader-vue3
```

### Usage

```HTML
<template>
  <div>
  
   <QRCodeVue3
          value="Simple QR code"
        />

   <QRCodeVue3
          :width="200"
          :height="200"
          value="https://scholtz.sk"
          :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
          :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
          :dotsOptions="{
            type: 'dots',
            color: '#26249a',
            gradient: {
              type: 'linear',
              rotation: 0,
              colorStops: [
                { offset: 0, color: '#26249a' },
                { offset: 1, color: '#26249a' },
              ],
            },
          }"
          :backgroundOptions="{ color: '#ffffff' }"
          :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
          :cornersDotOptions="{ type: undefined, color: '#000000' }"
          fileExt="png"
          :download="true"
          myclass="my-qur"
          imgclass="img-qr"
          downloadButton="my-button"
          :downloadOptions="{ name: 'vqr', extension: 'png' }"
        />
  </div>
</template>

<script>
import QRCodeVue3 from "qrcode-vue3";

export default {
  name: 'QRCodeVue3Example',
  components: {
    QRCodeVue3
  },
}
</script>
```

### API Documentation

#### VQRCodeStyling instance

`new VQRCodeStyling(options) => VQRCodeStyling`

| Param   | Type   | Description |
| ------- | ------ | ----------- |
| options | object | Init object |

`options` structure

| Property                | Type   | Default Value | Description                                           |
| ----------------------- | ------ | ------------- | ----------------------------------------------------- |
| width                   | number | `300`         | Size of canvas                                        |
| height                  | number | `300`         | Size of canvas                                        |
| download                | boolean| false         | To endable download button                            |
| myclass                 | string | ''            | Image DIV class                                       |
| imgclass                | string | ''            | Image class                                           |
| downloadButton          | string | ''            | download button class                                 |
| downloadOptions         | object |               | download option name and extension                    |
| value                   | string |               | The date will be encoded to the QR code               |
| image                   | string |               | The image will be copied to the center of the QR code |
| margin                  | number | `0`           | Margin around canvas                                  |
| qrOptions               | object |               | Options will be passed to `qrcode-generator` lib      |
| imageOptions            | object |               | Specific image options, details see below             |
| dotsOptions             | object |               | Dots styling options                                  |
| cornersSquareOptions    | object |               | Square in the corners styling options                 |
| cornersDotOptionsHelper | object |               | Dots in the corners styling options                   |
| backgroundOptions       | object |               | QR background styling options                         |

`options.qrOptions` structure

| Property             | Type                                               | Default Value |
| -------------------- | -------------------------------------------------- | ------------- |
| typeNumber           | number (`0 - 40`)                                  | `0`           |
| mode                 | string (`'Numeric' 'Alphanumeric' 'Byte' 'Kanji'`) |
| errorCorrectionLevel | string (`'L' 'M' 'Q' 'H'`)                         | `'Q'`         |

`options.imageOptions` structure

| Property           | Type                                    | Default Value | Description                                                                    |
| ------------------ | --------------------------------------- | ------------- | ------------------------------------------------------------------------------ |
| hideBackgroundDots | boolean                                 | `true`        | Hide all dots covered by the image                                             |
| imageSize          | number                                  | `0.4`         | Coefficient of the image size. Not recommended to use ove 0.5. Lower is better |
| margin             | number                                  | `0`           | Margin of the image in px                                                      |
| crossOrigin        | string(`'anonymous' 'use-credentials'`) |               | Set "anonymous" if you want to download QR code from other origins.            |

`options.dotsOptions` structure

| Property | Type                                                                           | Default Value | Description         |
| -------- | ------------------------------------------------------------------------------ | ------------- | ------------------- |
| color    | string                                                                         | `'#000'`      | Color of QR dots    |
| gradient | object                                                                         |               | Gradient of QR dots |
| type     | string (`'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'`) | `'square'`    | Style of QR dots    |

`options.backgroundOptions` structure

| Property | Type   | Default Value |
| -------- | ------ | ------------- |
| color    | string | `'#fff'`      |
| gradient | object |

`options.cornersSquareOptions` structure

| Property | Type                                      | Default Value | Description                |
| -------- | ----------------------------------------- | ------------- | -------------------------- |
| color    | string                                    |               | Color of Corners Square    |
| gradient | object                                    |               | Gradient of Corners Square |
| type     | string (`'dot' 'square' 'extra-rounded'`) |               | Style of Corners Square    |

`options.cornersDotOptions` structure

| Property | Type                      | Default Value | Description             |
| -------- | ------------------------- | ------------- | ----------------------- |
| color    | string                    |               | Color of Corners Dot    |
| gradient | object                    |               | Gradient of Corners Dot |
| type     | string (`'dot' 'square'`) |               | Style of Corners Dot    |

Gradient structure

`options.dotsOptions.gradient`

`options.backgroundOptions.gradient`

`options.cornersSquareOptions.gradient`

`options.cornersDotOptions.gradient`

| Property   | Type                         | Default Value | Description                                                                            |
| ---------- | ---------------------------- | ------------- | -------------------------------------------------------------------------------------- |
| type       | string (`'linear' 'radial'`) | "linear"      | Type of gradient spread                                                                |
| rotation   | number                       | 0             | Rotation of gradient in radians (Math.PI === 180 degrees)                              |
| colorStops | array of objects             |               | Gradient colors. Example `[{ offset: 0, color: 'blue' }, { offset: 1, color: 'red' }]` |

Gradient colorStops structure

`options.dotsOptions.gradient.colorStops[]`

`options.backgroundOptions.gradient.colorStops[]`

`options.cornersSquareOptions.gradient.colorStops[]`

`options.cornersDotOptions.gradient.colorStops[]`

| Property | Type             | Default Value | Description                         |
| -------- | ---------------- | ------------- | ----------------------------------- |
| offset   | number (`0 - 1`) |               | Position of color in gradient range |
| color    | string           |               | Color of stop in gradient range     |

#### VQRCodeStyling methods

`VQRCodeStyling.append(container) => void`

| Param     | Type        | Description                                              |
| --------- | ----------- | -------------------------------------------------------- |
| container | DOM element | This container will be used for appending of the QR code |

`VQRCodeStyling.update(options) => void`

| Param   | Type   | Description                            |
| ------- | ------ | -------------------------------------- |
| options | object | The same options as for initialization |

`VQRCodeStyling.download(downloadOptions) => void`

| Param           | Type   | Description                                            |
| --------------- | ------ | ------------------------------------------------------ |
| downloadOptions | object | Options with extension and name of file (not required) |

`downloadOptions` structure

| Property  | Type                           | Default Value | Description                 |
| --------- | ------------------------------ | ------------- | --------------------------- |
| name      | string                         | `'qr'`        | Name of the downloaded file |
| extension | string (`'png' 'jpeg' 'webp'`) | `'png'`       | File extension              |

if any issue [check](https://github.com/scholtz/qrcode-vue3/issues)

_also you can buy me a coffee @ [Patreon](https://www.patreon.com/diadal)_

### License

[MIT License](https://raw.githubusercontent.com/scholtz/qrcode-vue3/master/LICENSE). Copyright (c) 2021 Diadal Nig
