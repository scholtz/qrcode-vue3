<script lang="ts" setup>
//import { computed, reactive, ref, watch } from "vue";
import QRCodeVue3Async from "./QRCodeVue3Async.vue";

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
</script>

<template>
  <Suspense>
    <QRCodeVue3Async
      :background-options="props.backgroundOptions"
      :button-name="props.buttonName"
      :corners-dot-options="props.cornersDotOptions"
      :corners-square-options="props.cornersSquareOptions"
      :dots-options="props.dotsOptions"
      :download="props.download"
      :download-button="props.downloadButton"
      :download-options="props.downloadOptions"
      :file-ext="props.fileExt"
      :height="props.height"
      :image="props.image"
      :image-options="props.imageOptions"
      :imgclass="props.imgclass"
      :margin="props.margin"
      :value="props.value"
      :myclass="props.myclass"
      :qr-options="props.qrOptions"
      :width="props.width"
    />
  </Suspense>
</template>
