<template>
  <div class="my-element">
    <p :style="textStyle">I am a custom element !</p>
    <SfProductCard
        image="/assets/storybook/Home/productB.jpg"
        :imageWidth="216"
        :imageHeight="326"
        badgeLabel=""
        badgeColor=""
        title="Cotton Sweater"
        linkTag=""
        :scoreRating="4"
        :reviewsCount="7"
        :maxRating="5"
        regularPrice=""
        specialPrice=""
        wishlistIcon="heart"
        isInWishlistIcon="heart_fill"
        :isInWishlist="false"
        showAddToCartButton
        :isAddedToCart="false"
        :addToCartDisabled="false"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}
</style>
