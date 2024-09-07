<script lang="ts" setup>
//import { computed, reactive, ref, watch } from "vue";
import QRCodeStyling from "./core/QRCodeStyling";

export interface Props {
  value: string;
  width?: number;
  height?: number;
  margin?: number;
  imgclass?: string;
  myclass?: string;
  downloadButton?: string;
  buttonName?: string;
  qrOptions?: any;
  imageOptions?: any;
  dotsOptions?: any;
  backgroundOptions?: any;
  cornersSquareOptions?: any;
  cornersDotOptions?: any;
  fileExt?: string;
  image?: string;
  download?: boolean;
  downloadOptions?: any;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
  width: 300,
  height: 300,
  margin: 0,
  imgclass: "",
  myclass: "",
  downloadButton: "",
  buttonName: "Download",
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "Q"
  },
  imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  dotsOptions: {
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
  },
  backgroundOptions: { color: "#ffffff" },
  cornersSquareOptions: { type: "dot", color: "#000000" },
  cornersDotOptions: { type: undefined, color: "#000000" },
  fileExt: "png",
  image: "",
  download: false,
  downloadOptions: { name: "vqr", extension: "png" }
});

const qrCode = new QRCodeStyling({
  data: props.value,
  width: props.width,
  height: props.height,
  margin: props.margin,
  qrOptions: props.qrOptions,
  imageOptions: props.imageOptions,
  dotsOptions: props.dotsOptions,
  backgroundOptions: props.backgroundOptions,
  image: props.image,
  cornersSquareOptions: props.cornersSquareOptions,
  cornersDotOptions: props.cornersDotOptions
});

let imageUrl = await qrCode.getImageUrl(props.fileExt);

function onDownloadClick() {
  qrCode.download(props.downloadOptions);
}
</script>

<template>
  <div>
    <div v-if="imageUrl" :class="myclass">
      <img :src="imageUrl" :class="imgclass" crossorigin="anonymous" />
    </div>
    <div v-if="imageUrl && download">
      <button @click="onDownloadClick" :class="downloadButton">
        {{ buttonName }}
      </button>
    </div>
  </div>
</template>
