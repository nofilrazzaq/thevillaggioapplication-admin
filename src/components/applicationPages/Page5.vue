<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages fifth-page">
      <h4 class="heading-h"><u>Income Information </u></h4>
      <p class="income-p">Income is counted for anyone 18 or older (unless legally emancipated). However, if the income
        is unearned income such
        as a grant or benefit, it is counted for all household members including minors. </p>
      <p>Answer the questions in this section to provide the source(s) of all household income. Include all income
        anticipated for
        the next 12 months. (Use the back of this form if you need more space.) </p>
      <h4 class="subheading">Do YOU or ANYONE in your household receive OR expect to receive income from:</h4>
      <p class="income-label"><span>1.</span>
      <b> What is your total income?</b>
      <input type="text" class="custom-input w-25 mb-3" v-model="this.$parent.application.step11_annualIncome"> </p>
      <p class="income-label"><span>2.</span>
        <b> Employment wages, or salaries, or self-employment?</b> (Include overtime, tips, bonuses, commissions, and
        payments received in cash. Use an additional page to add additional employment income sources.)</p>
      <table class="incom-information-table">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q1" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q1" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Name of Company </h5>
            </label></th>
          <th><label for="">
              <h5>Amount/month</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q1_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q1_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q1_name1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q1_name2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q1_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step11_q1_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>

      </table>
      <!-- 2 -->
      <p class="income-label"><span>3.</span>
        <b> Social Security, SSI or any other payments from the Social Security Administration? </b></p>
      <table class="incom-information-table">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q2" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q2" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>SSA / SSI / SSDI? </h5>
            </label></th>
          <th><label for="">
              <h5>Amount/month</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q2_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q2_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q2_ssa1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q2_ssa2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q2_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step11_q2_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>
      </table>
      <!-- 3 -->
      <p class="income-label"><span>4.</span>
        <b> Are you receiving regular payments from a pension, retirement benefit or annuities? </b></p>
      <table class="incom-information-table">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q3" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q3" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Type of Pension / Annuity </h5>
            </label></th>
          <th><label for="">
              <h5>Amount/month</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q3_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q3_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q3_pension_type1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q3_pension_type2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q3_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step11_q3_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>
      </table>
      <!-- 4 -->
      <p class="income-label"><span>5.</span>
        <b> Regular gifts or payments from anyone outside of the household? </b>(This includes anyone supplementing your
        income or paying any of your bills, utilities, groceries, or other expenses.)</p>
      <table class="incom-information-table">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q4" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q4" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Name of Person
                Supplementing Income </h5>
            </label></th>
          <th><label for="">
              <h5>Amount/month</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q4_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q4_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q4_no_of_persons1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q4_no_of_persons2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q4_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step11_q4_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>
      </table>
      <!-- 5 -->
      <p class="income-label"><span>6.</span>
        <b>Any other income sources or types not listed?</b> (e.g., alimony or child support (whether or not it is
          received), pay
          as a current member of the Armed Forces, unemployment benefits or workers’ compensation, public assistance or
          general relief, payments from a severance package, payments from any type of settlement, payments from rental
          property or other types of real estate transactions, payments from lottery winnings or inheritances, etc.)
      </p>
      <table class="incom-information-table">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q5" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q5" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Type of Other Income</h5>
            </label></th>
          <th><label for="">
              <h5>Amount/month</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q5_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q5_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q5_income_type1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q5_income_type2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q5_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step11_q5_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>
      </table>
      <!-- 6 -->
      <p class="income-label"><span>7.</span>
        <b>Do you, or any other household member, expect any changes to your income in the next 12 months?</b></p>
      <table class="incom-information-table">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q6" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step11_q6" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Explanation</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q6_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q6_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step11_q6_explanation1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step11_q6_explanation2" class="custom-input">
          </td>

        </tr>
      </table>
      <!-- 7 -->
      <div class="col-12 sevenththnumber">
        <p class="income-label"><span>8.</span>
          <b>Do you, or any other household member, expect any changes to your income in the next 12 months?</b></p>
        <input type="text" disabled v-model="$parent.application.step11_q7" class="custom-input">
      </div>

    </div>
    <!-- full time student information secton end -->

  </div>
</template>

<script>
export default {
  name: 'Page5',
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped>
tr th h5 {
  margin-right: 5px;
}
</style>
