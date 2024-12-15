<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.monitor']" />
    <div class="content">
      <a-row class="grid-item" style="margin-bottom: 16px">
        <a-col flex="150px">
          <div class="content-time">{{ getNowDateTime() }}</div>
        </a-col>
        <a-col flex="auto" class="content-title">
          <div>净链反洗钱数据大屏</div>
        </a-col>
        <a-col flex="150px"></a-col>
      </a-row>

      <a-row class="grid-item" justify="space-between" :gutter="24">
        <a-col :span="6">
          <a-space direction="vertical" fill>
            <div>
              <Overview />
            </div>
            <div>
              <TransactionLine />
            </div>
          </a-space>
        </a-col>
        <a-col :span="14">
          <div class="right-container">
            <RegionMap />
          </div>
        </a-col>
        <a-col :span="4">
          3333
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import dayjs from 'dayjs';
import Overview from '@/views/dashboard/monitor/info/Overview.vue';
import TransactionLine from '@/views/dashboard/monitor/info/TransactionLine.vue';
import RegionMap from '@/views/dashboard/monitor/info/RegionMap.vue';

// 将 timer 的类型修正为 number | null
const timer = ref<number | null | any>(null);

const getNowDateTime = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

onBeforeUnmount(() => {
  if (timer.value !== null) {
    clearInterval(timer.value);
  }
});

onMounted(() => {
  timer.value = setInterval(() => {
    // dateTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
});
</script>

<script lang="ts">
export default {
  name: 'Monitor',
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
}

.content {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.grid-item {
  color: #fff;
  z-index: 999;
}

.content-time {
  margin-top: 15px;
  padding-left: 10px;
}

.content-title {
  min-width: 150px;
  margin-top: 15px;
  padding-right: 250px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.right-container {
  padding-right: 20px;
}

.layout {
  display: flex;

  &-left-side {
    flex-basis: 300px;
  }

  &-content {
    flex: 1;
    padding: 0 16px;
  }

  &-right-side {
    flex-basis: 280px;
  }
}

#chart {
  margin-left: 10px;
  border: 0.5px solid #4ba3b3;
  // border-radius: 20px;
  stroke: #FFFFFF;
}

@media (max-width: @screen-lg) {
  .layout {
    flex-wrap: wrap;

    &-left-side {
      flex: 1;
      flex-basis: 100%;
      margin-bottom: 16px;
    }

    &-content {
      flex: none;
      flex-basis: 100%;
      padding: 0;
      order: -1;
      margin-bottom: 16px;
    }

    &-right-side {
      flex-basis: 100%;
    }
  }
}
</style>