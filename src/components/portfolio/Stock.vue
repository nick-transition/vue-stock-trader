<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3>
          {{stock.name}}
          <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>

        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left" style="width: 50%">
          <input type="number"
                 class="form-control"
                 placeholder="Quantity"
                 v-model="quantity"
                 :class="{danger:excessiveQuantity}"
                 >
        </div>
        <div class="pull-right">
          <button
                  class="btn btn-info"
                  @click="sellStock"
                  :disabled="excessiveQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                  >{{excessiveQuantity ? 'Not enough Stocks' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    excessiveQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }

}
</script>

<style scoped>
    .danger {
      border: 1px solid red;
    }
</style>
