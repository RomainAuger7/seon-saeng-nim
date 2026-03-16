<script setup>
import ClassInfoTable from '@/components/ClassInfoTable.vue'
</script>
<template>
  <div class="container">
    <h1>{{ $t('info.title') }}</h1>
    <div class="table">
      <ClassInfoTable />
    </div>
    <div class="info">
      <ul>
        <li>{{ $t('info.info1') }}</li>
        <li>{{ $t('info.info2') }}</li>
        <li>{{ $t('info.info3') }}</li>
        <li>{{ $t('info.info4') }}</li>
        <li>{{ $t('info.info5') }}</li>
        <li>{{ $t('info.info6') }}</li>
        <li>{{ $t('info.info7') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.container h1 {
  font-size: 1.6rem;
}
.table {
  width: 70%;
}
.info {
  padding: 1rem 2.5rem;
}
.info li {
  font-size: 1.5rem;
}
@media screen and (max-width: 1160px) {
  .table {
    width: 80%;
  }
  .info li {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 450px) {
  .table {
    width: 90%;
  }
  .info li {
    font-size: 1.2rem;
  }
}
</style>
