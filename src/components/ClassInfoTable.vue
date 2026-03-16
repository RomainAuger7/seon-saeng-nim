<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const col1 = computed(() => t('info.table1_col1'))
const col2 = computed(() => t('info.table1_col2'))
const col3 = computed(() => t('info.table1_col3'))
const col4 = computed(() => t('info.table2_col1'))
const col5 = computed(() => t('info.table2_col2'))
const generalClasses = [
  { name: col1, beginner: true, intermediate: true, advanced: true, price: '25€' },
  { name: col2, beginner: false, intermediate: true, advanced: true, price: '30€' },
  { name: col3, beginner: false, intermediate: true, advanced: true, price: '30€' },
]

const topikClasses = [
  {
    name: col4,
    g1: true,
    g2: true,
    g3: true,
    g4: true,
    g5: true,
    g6: true,
    price: '30€',
  },
  { name: col5, g1: false, g2: false, g3: true, g4: true, g5: true, g6: true, price: '30€' },
]
</script>
<template>
  <div class="pricing-tables">
    <!-- Table 1: General Korean -->
    <section>
      <h3>
        {{ $t('info.table1') }} <span class="subtitle">{{ $t('info.table1_subtitle') }}</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{{ $t('info.table1_head1') }}</th>
            <th>{{ $t('info.table1_head2') }}</th>
            <th>{{ $t('info.table1_head3') }}</th>
            <th>{{ $t('info.table1_head4') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in generalClasses" :key="row.name">
            <td>{{ row.name }}</td>
            <td>{{ row.beginner ? '✓' : '' }}</td>
            <td>{{ row.intermediate ? '✓' : '' }}</td>
            <td>{{ row.advanced ? '✓' : '' }}</td>
            <td>{{ row.price }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Table 2: TOPIK Prep -->
    <section>
      <h3>
        {{ $t('info.table2') }} <span class="subtitle">{{ $t('info.table2_subtitle') }}</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th rowspan="3"></th>
            <th colspan="2">I</th>
            <th colspan="4">II</th>
            <th rowspan="3">{{ $t('info.table2_head4') }}</th>
          </tr>
          <tr>
            <th colspan="2">{{ $t('info.table2_head1') }}</th>
            <th colspan="2">{{ $t('info.table2_head2') }}</th>
            <th colspan="2">{{ $t('info.table2_head3') }}</th>
          </tr>
          <tr>
            <th>{{ $t('info.table2_subhead1') }}</th>
            <th>{{ $t('info.table2_subhead2') }}</th>
            <th>{{ $t('info.table2_subhead3') }}</th>
            <th>{{ $t('info.table2_subhead4') }}</th>
            <th>{{ $t('info.table2_subhead5') }}</th>
            <th>{{ $t('info.table2_subhead6') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in topikClasses" :key="row.name">
            <td>{{ row.name }}</td>
            <td v-for="level in ['g1', 'g2', 'g3', 'g4', 'g5', 'g6']" :key="level">
              {{ row[level] ? '✓' : '' }}
            </td>
            <td>{{ row.price }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped>
.pricing-tables {
  font-family: sans-serif;
}

section {
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.subtitle {
  font-weight: 400;
  color: #888;
  font-size: 1.2rem;
}

table {
  width: 100%;
  border: #141414 1px solid;
  border-collapse: collapse;
  font-size: 14px;
}

th,
td {
  border: 2px solid rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  text-align: center;
}

thead tr {
  background: var(--primary);
}

tbody tr {
  background: white;
}
</style>
