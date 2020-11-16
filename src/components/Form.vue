<template>
  <div class="row">
    <form v-if="!isSubmitted">
      <div class="columns small-12">
          <label for="firsname">
            <input type="text" v-model="userData.firstName">
          </label>
          <label for="lastName">
            <input type="text" v-model="userData.lastName">
          </label>
          <label for="email">
            <input type="text" v-model="userData.email">
          </label>
          <label for="address">
            <input type="text" v-model="userData.address">
          </label>
          <label for="postCode">
            <input type="text" v-model="userData.postCode">
          </label>
          <label for="city">
            <input type="text" v-model="userData.city">
          </label>
          
          <h6>Save your details</h6>
          <label for="yes" class="save-detail">
            Yes
            <input type="radio" id="yes" value="yes" v-model="userData.storeData">
          </label>
          <label for="no" class="save-detail">
            No
            <input type="radio" id="no" value="no" v-model="userData.storeData">
          </label>
          <a type="submit" class="button expanded dark" @click.prevent="submitted">Send me the goods</a>
      </div>
    </form>

    <div class="row show-details" v-if="isSubmitted">
      <div class="columns small-12">
        <h6><strong>Your details:</strong></h6>
        <p>Fistname: {{ userData.firstName }}</p>
        <p>Lastname: {{ userData.lastName }}</p>
        <p>Mail: {{ userData.email }}</p>
        <p>Address: {{ userData.address }}</p>
        <p>Post code: {{ userData.postCode }}</p>
        <p>City: {{ userData.city }}</p>
        <p>Store in Database?: {{ userData.storeData }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userData: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        address: "Address",
        postCode: "Post code",
        city: "City",
        storeData: "yes"
      },
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
      this.$store.commit('EMPTY_ARRAY');
      // Here I want to emit data to parent to notify that the form was filed correctly and user can "BUY"
      // this.$emit('form', this.)
    }
  }
};
</script>

<style scoped lang="scss">

label {
  display: block;
  /* width: 100%; */
}
input {
  display: block;
  margin-bottom: 20px;
  width: 100%;
}
.radio {
  display: inline;
}

input[type="radio"],
#yes,
#no {
  display: inline-block;
}

.save-detail {
  display: inline-block;
}

.dark {
  background-color: rgb(100, 100, 100);
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(221, 221, 221);
  margin: 10px 0;

  &:hover {
    background-color: rgb(131, 131, 131);
    color: rgb(255, 255, 255);
  }
}
.show-details {
  margin-left: 10px;

  p {
    margin: 0;
  }
}


</style>
