<template>
  <div class="hello">
    <h1>Boston University in Four Seasons</h1>
    <div class ="name"> 

    <div class= "letter" @mouseover="hover1 = true" @mouseleave="hover1 = false">
      <span v-if="!hover1">
        <h2>Spring</h2>
        <img class="image" src="https://i.pinimg.com/originals/57/8c/3a/578c3a99c7fbeb148e8bc68d3042093f.jpg" alt="Poodle" width="600" height="500">
      </span>
     <span v-if="hover1">
      <h2>Summer</h2>
      <img class="image" src="https://www.metro.us/wp-content/uploads/2020/02/boston-university-campus-summer-ny.jpg" alt="Husky"  width="600" height="500">
      </span>
    </div>

    <div class= "letter" @mouseover="hover2 = true" @mouseleave="hover2 = false">
      <span v-if="!hover2">
        <h2>Winter</h2>
        <img class="image" src="https://www.bu.edu/files/2020/04/preview-zoom-backgrounds-03.jpg" alt="Labrador" width="600" height="500">
      </span>
      <span v-if="hover2">
        <h2>Autumn</h2>
        <img class="image" src="https://pbs.twimg.com/media/DLdmAp9WAAYUkRo.jpg" alt="Poodle" width="600" height="500">
      </span>
      
    </div>

    <div class= "letter" @mouseover="hover3 = true" @mouseleave="hover3 = false">
      <span v-if="!hover3">
      <h2>Summer</h2>
       <img class="image" src="https://www.metro.us/wp-content/uploads/2020/02/boston-university-campus-summer-ny.jpg" alt="summer" width="600" height="500">
      </span>
      <span v-if="hover3">
        <h2>Spring</h2>
        <img class="image" src="https://i.pinimg.com/originals/57/8c/3a/578c3a99c7fbeb148e8bc68d3042093f.jpg" alt="Labrador" width="600" height="500">
      </span>
    </div>

    <div class= "letter" @mouseover="hover4 = true" @mouseleave="hover4 = false">
       <span v-if="!hover4">
      <h2>Autumn</h2>
      <img class="image" src="https://pbs.twimg.com/media/DLdmAp9WAAYUkRo.jpg" alt="Husky" width="600" height="500">
      </span>
      <span v-if="hover4">
      <h2>Winter</h2>
        <img class="image" src="https://www.bu.edu/files/2020/04/preview-zoom-backgrounds-03.jpg" alt="Labrador" width="600" height="500">
      </span>
    </div>

   </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<script>
export default {
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false
    };
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  display: flex;
  align-items: center;
  justify-content: center; 
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
  margin: 10 px;
  filter: drop-shadow(16px,16px,16px,white )
}
.letter {
  margin: 10 px;
  filter: drop-shadow(16px,16px,16px,white )
}

h2{
    font-family: 'Trebuchet MS', sans-serif;
    margin:0;
    padding:5 px;
    border: 1px solid #ddd;
    color:  #8076a3;
    background: #e5eaf5; 
    font-size: 25px;
}

h2:hover {
    background: #a0d2eb;
    /* #e5eaf5; */
    color: #a28089;
}
</style>
