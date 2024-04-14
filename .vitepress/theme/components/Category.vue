<script setup lang="ts">

</script>

<template>
  <div>
    <ul>
      <li>
        写作向
        <ul>
          <li>1</li>
        </ul>
      </li>
      <li>
        技术向
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </li>
      <li>
        杂文向
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </li>
      <li>
        诗歌向
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </li>
      <li>经济向</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style-image: url(/assets/icon/open-folder.svg);
}

li ul li  {
  list-style-image: url(/assets/icon/file.svg);
  margin-left: 30px;
  line-height: 2;
  cursor:pointer;

  &:hover {
    background: pink;
  }
}

</style>