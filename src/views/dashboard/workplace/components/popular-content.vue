<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card class="general-card" :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }">
      <template #title>
        {{ $t('workplace.popularContent') }}
      </template>
      <template #extra>
        <a-link>{{ $t('workplace.viewMore') }}</a-link>
      </template>
      <a-space direction="vertical" :size="10" fill>
        <!-- <a-radio-group
          v-model:model-value="type"
          type="button"
          @change="typeChange as any"
        >
          <a-radio value="text">
            {{ $t('workplace.popularContent.text') }}
          </a-radio>
          <a-radio value="image">
            {{ $t('workplace.popularContent.image') }}
          </a-radio>
          <a-radio value="video">
            {{ $t('workplace.popularContent.video') }}
          </a-radio>
        </a-radio-group> -->
        <a-table :data="renderList" :pagination="false" :bordered="false" :scroll="{ x: '100%', y: '264px' }">
          <template #columns>
            <a-table-column title="序号" data-index="key"></a-table-column>
            <a-table-column title="交易日期" data-index="transactionDate">
              <template #cell="{ record }">
                <a-typography-paragraph :ellipsis="{
                  rows: 2,
                }">
                  {{ record.transactionDate }}
                </a-typography-paragraph>
              </template>
            </a-table-column>
            <a-table-column title="交易类型" data-index="transactionType">
            </a-table-column>
            <a-table-column title="涉及金额" data-index="amountInvolved" :sortable="{
              sortDirections: ['ascend', 'descend'],
            }">
              <template #cell="{ record }">
                <div class="increases-cell">
                  <span>{{ record.amountInvolved }}</span>
                  <icon-caret-up v-if="record.amountInvolved !== 0" style="color: #f53f3f; font-size: 8px" />
                </div>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-space>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useLoading from '@/hooks/loading';
import { queryPopularList } from '@/api/dashboard';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

const type = ref('text');
const { loading, setLoading } = useLoading();
const renderList = ref<TableData[]>();
const fetchData = async (contentType: string) => {
  try {
    setLoading(true);
    // const { data } = await queryPopularList({ type: contentType });
    renderList.value = [
      {
        key: "1",
        transactionDate: "2024-12-01",
        transactionType: "大额转账",
        amountInvolved: "800,000"
      },
      {
        key: "2",
        transactionDate: "2024-12-05",
        transactionType: "跨境汇款",
        amountInvolved: "500,000"
      },
      {
        key: "3",
        transactionDate: "2024-12-10",
        transactionType: "频繁现金存取",
        amountInvolved: "200,000"
      },
      {
        key: "4",
        transactionDate: "2024-12-15",
        transactionType: "可疑网上支付",
        amountInvolved: "350,000"
      }
    ];
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    setLoading(false);
  }
};
const typeChange = (contentType: string) => {
  fetchData(contentType);
};
fetchData('text');
</script>

<style scoped lang="less">
.general-card {
  min-height: 395px;
}

:deep(.arco-table-tr) {
  height: 44px;

  .arco-typography {
    margin-bottom: 0;
  }
}

.increases-cell {
  display: flex;
  align-items: center;

  span {
    margin-right: 4px;
  }
}
</style>
