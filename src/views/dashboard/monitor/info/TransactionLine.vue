<template>
    <div class="trans-container">
        <div id="transaction" style="width: 100%; height: 300px"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VChart from '@visactor/vchart';

onMounted(() => {
    const spec = {
        type: 'line',
        data: {
            values: [
                {
                    time: '2024-12-01',
                    value: 4500
                },
                {
                    time: '2024-12-02',
                    value: 4800
                },
                {
                    time: '2024-12-03',
                    value: 5200
                },
                {
                    time: '2024-12-04',
                    value: 5000
                },
                {
                    time: '2024-12-05',
                    value: 4700
                },
                {
                    time: '2024-12-06',
                    value: 5100
                },
                {
                    time: '2024-12-07',
                    value: 5300
                },
                {
                    time: '2024-12-08',
                    value: 5500
                },
                {
                    time: '2024-12-09',
                    value: 5800
                },
                {
                    time: '2024-12-10',
                    value: 6000
                },
                {
                    time: '2024-12-11',
                    value: 6200
                },
                {
                    time: '2024-12-12',
                    value: 6500
                },
                {
                    time: '2024-12-13',
                    value: 6300
                },
                {
                    time: '2024-12-14',
                    value: 6700
                },
                {
                    time: '2024-12-15',
                    value: 7000
                },
                {
                    time: '2024-12-16',
                    value: 7200
                },
                {
                    time: '2024-12-17',
                    value: 7500
                },
                {
                    time: '2024-12-18',
                    value: 7800
                },
                {
                    time: '2024-12-19',
                    value: 8000
                },
                {
                    time: '2024-12-20',
                    value: 8200
                }
            ]
        },
        xField: 'time',
        yField: 'value',
        // background: 'transparent',
        title: {
            text: '交易金额'
        }
    };

    // 创建 vchart 实例
    const vchart = new VChart(spec, { dom: 'transaction' });
    // 绘制
    vchart.renderSync();
});
</script>

<style scoped>
.trans-container {
    margin-left: 10px;
    background-color: transparent;
}

#transaction {
    border: 0.5px solid #4ba3b3;
}
</style>