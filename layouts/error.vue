<template>
  <div id="apperror">

 <h1>Error Not found it - 404</h1>


  </div>
</template>


<script>
export default {
  asyncData() {
    throw new Error(':(')
  }
}
</script>

