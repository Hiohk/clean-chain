<template>
    <div class="word-container">
        <div id="word" style="width: 100%; height: 300px"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VChart from '@visactor/vchart';
import { words } from '@/views/dashboard/monitor/data/words';

onMounted(() => {
    const spec = {
        type: 'wordCloud',
        nameField: 'text',
        valueField: 'weight',
        seriesField: 'text',
        data: {
            name: 'baseData',
            values: words
        },
        // background: 'transparent',
        title: {
            text: '地点词云',
        }
    };
    const vchart = new VChart(spec, { dom: "word" });
    vchart.renderSync();
});


// Just for the convenience of console debugging, DO NOT COPY!

</script>

<style scoped>
.word-container {
    margin-left: 10px;
    background-color: transparent;
}

#word {
    border: 0.5px solid #4ba3b3;
}
</style>