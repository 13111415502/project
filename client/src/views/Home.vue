<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import request from "../utils/request";
export default {
  data() {
    return {
      video: [],
      book: [],
      blog: [],
      download: [],
    };
  },

  mounted() {

      (async ()=>{
          let video = await request.get("/video");
          let book = await request.get("/book");
          let blog = await request.get("/blog");
          let download = await request.get("/download");
            var myChart = echarts.init(document.getElementById("main"));
                var option = {
                title: {
                    text: "数据数量",
                },
                tooltip: {},
                legend: {
                    data: ["数量"],
                },
                xAxis: {
                    data: ["下载", "视频", "博客", "小说"],
                },
                yAxis: {},
                series: [
                    {
                    name: "数量",
                    type: "bar",
                    data: [download.data.data.length,
                     video.data.data.length, 
                     blog.data.data.length, 
                     book.data.data.length],
                    },  
                ],
                };
                myChart.setOption(option);




      })()
    
  },
};
</script>