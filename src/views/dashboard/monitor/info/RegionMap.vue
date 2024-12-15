<template>
    <div>
        <div id="map" style="width: 100%;height: 600px;"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VChart from '@visactor/vchart';

onMounted(async () => {
    const response = await fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/geojson/world.json');
    const geojson = await response.json();
    VChart.registerMap('world', geojson);

    const dataResponse = await fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/geojson/earthquake.json');
    const earthquakeData = await dataResponse.json();

    const spec = {
        type: 'common',
        region: [
            {
                roam: true,
                coordinate: 'geo',
                longitudeField: 'lng',
                latitudeField: 'lat',
                projection: {
                    type: 'equirectangular'
                }
            }
        ],
        title: {
            text: '实时交易可视化'
        },
        background: 'rgb(240, 248, 255)',
        data: [{ values: earthquakeData.values }],
        series: [
            { type: 'map', map: 'world', tooltip: { visible: false }, defaultFillColor: 'rgb(245,255,250)' },
            {
                type: 'scatter',
                xField: 'time',
                yField: 'level',
                point: {
                    style: {
                        size: datum => {
                            return datum.level > 7 ? +datum.level * 2 : +datum.level;
                        },
                        fill: 'red',
                        fillOpacity: 0.2
                    }
                }
            }
        ]
    };

    const vchart = new VChart(spec, { dom: 'map' });
    vchart.renderSync();
});
</script>

<style scoped></style>