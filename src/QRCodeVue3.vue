<template>
  <div>
    <div v-if="imageUrl" :class="myclass">
      <img :src="imageUrl" :class="imgclass" crossorigin="anonymous" />
    </div>
    <div v-if="download">
      <button @click="onDownloadClick" :class="downloadButton">
        {{ ButtonName }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import QRCodeStyling from "./core/QRCodeStyling";
export default defineComponent({
  name: "QRCodeVue3",
  props: {
    width: {
      type: Number,
      default: 300
    },
    imgclass: {
      type: String,
      default: ""
    },
    myclass: {
      type: String,
      default: ""
    },
    downloadButton: {
      type: String,
      default: ""
    },
    ButtonName: {
      type: String,
      default: "Download3"
    },
    height: {
      type: Number,
      default: 300
    },
    margin: {
      type: Number,
      default: 0
    },
    value: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ""
    },
    qrOptions: {
      type: Object,
      default: () => ({
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
      })
    },
    imageOptions: {
      type: Object,
      default: () => ({ hideBackgroundDots: true, imageSize: 0.4, margin: 0 })
    },
    dotsOptions: {
      type: Object,
      default: () => ({
        type: "dots",
        color: "#6a1a4c",
        gradient: {
          type: "linear",
          rotation: 0,
          colorStops: [
            { offset: 0, color: "#6a1a4c" },
            { offset: 1, color: "#6a1a4c" }
          ]
        }
      })
    },
    backgroundOptions: {
      type: Object,
      default: () => ({ color: "#ffffff" })
    },
    cornersSquareOptions: {
      type: Object,
      default: () => ({ type: "dot", color: "#000000" })
    },
    cornersDotOptions: {
      type: Object,
      default: () => ({ type: undefined, color: "#000000" })
    },
    fileExt: {
      type: String,
      default: "png"
    },
    download: {
      type: Boolean,
      default: false
    },

    downloadOptions: {
      type: Object,
      default: () => ({ name: "vqr", extension: "png" })
    },
    onDownloadClick: {
      type: Function,
      default: () => ({}),
    }
  },
  data() {
    return {
      imageUrl: "" as string,
      qrCode: new QRCodeStyling({
        data: this.value,
        width: this.width,
        height: this.height,
        margin: this.margin,
        qrOptions: this.qrOptions,
        imageOptions: this.imageOptions,
        dotsOptions: this.dotsOptions,
        backgroundOptions: this.backgroundOptions,
        image: this.image,
        cornersSquareOptions: this.cornersSquareOptions,
        cornersDotOptions: this.cornersDotOptions
      })
    };
  },
  watch: {
    async value() {
      this.qrCode = new QRCodeStyling({
        data: this.value,
        width: this.width,
        height: this.height,
        margin: this.margin,
        qrOptions: this.qrOptions,
        imageOptions: this.imageOptions,
        dotsOptions: this.dotsOptions,
        backgroundOptions: this.backgroundOptions,
        image: this.image,
        cornersSquareOptions: this.cornersSquareOptions,
        cornersDotOptions: this.cornersDotOptions
      });

      this.imageUrl = await this.qrCode.getImageUrl(this.fileExt);
    }
  },
  async mounted() {
    this.imageUrl = await this.qrCode.getImageUrl(this.fileExt);
  }
});
</script>
