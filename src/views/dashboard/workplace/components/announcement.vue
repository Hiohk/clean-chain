<template>
  <a-card class="general-card" :title="$t('workplace.announcement')" :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '15px 20px 13px 20px' }">
    <template #extra>
      <a-link>{{ $t('workplace.viewMore') }}</a-link>
    </template>
    <div>
      <div v-for="(item, idx) in list" :key="idx" class="item">
        <a-tag :color="item.type" size="small">{{ item.label }}</a-tag>
        <span class="item-content">
          {{ item.content }}
        </span>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
const list = [
  {
    type: 'orangered',
    label: '活动',
    content: '反洗钱知识竞赛活动即将开启，丰厚奖品等您拿！',
  },
  {
    type: 'cyan',
    label: '消息',
    content: '反洗钱系统检测到一批新的可疑交易，详情请点击查看。',
  },
  {
    type: 'blue',
    label: '通知',
    content: '反洗钱法规更新，系统部分功能将进行适应性调整，请留意后续通知。',
  },
  {
    type: 'blue',
    label: '通知',
    content: '反洗钱系统将于近期进行安全升级，预计停机维护 2 小时。',
  },
  {
    type: 'cyan',
    label: '消息',
    content: '反洗钱客户风险评估模型优化完成，新结果已更新，详情点击查看。',
  },
];
</script>

<style scoped lang="less">
.item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 4px;

  .item-content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 4px;
    color: var(--color-text-2);
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;
  }
}
</style>
