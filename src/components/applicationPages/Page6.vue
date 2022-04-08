<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages fifth-page">
      <h4 class="heading-h"><u>Asset Information </u></h4>
      <p class="income-p">Include all assets held and the income derived from the asset. INCLUDE ALL ASSETS HELD BY ALL
        HOUSEHOLD
        MEMBERS <u>INCLUDING MINORS.</u> </p>
      <p>Answer the questions in this section to provide the source(s) of all household assets. </p>
      <p><b>(Use the back of this form if you need more space.</b></p>
      <h5><b>Do YOU or ANYONE in your household have:</b></h5>
      <br>
      <p class="income-label"><span>1.</span>
        <b>Checking, Savings, Direct Express Cards, CDs, Money Markets, and/or Treasury Bills? </b></p>
      <table class="incom-information-table-2">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q1" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q1" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Acct. Type </h5>
            </label></th>
          <th><label for="">
              <h5>Institution</h5>
            </label></th>
          <th><label for="">
              <h5>Last 4 of Acct. </h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q1_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q1_household2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q1_type1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q1_type2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q1_institution1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q1_institution2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q1_acct_4_last1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q1_acct_4_last2" class="custom-input">
          </td>
        </tr>

      </table>
      <!-- 2 -->
      <p class="income-label"><span>2.</span>
        <b>Cash on hand?</b> This is cash not kept in a bank account.</p>
      <table class="incom-information-table-2">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q2" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q2" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Cash on Hand </h5>
            </label></th>
          <th><label for="">
              <h5></h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q2_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q2_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q2_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step12_q2_amount2" class="custom-input" placeholder="$">
          </td>
          <td>

          </td>
        </tr>
      </table>
      <!-- 3 -->
      <p class="income-label"><span>3.</span>
        <b>Real estate, rental property, land contracts/contract for deeds or other real estate holdings?</b> (This
        includes
        your personal residence, mobile homes, vacant land, farms, vacation homes or commercial property.)</p>
      <table class="incom-information-table-2">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q3" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q3" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Type </h5>
            </label></th>
          <th><label for="">
              <h5>Value</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q3_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q3_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q3_type1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q3_type2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q3_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step12_q3_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>
      </table>
      <!-- 4 -->
      <p class="income-label"><span>4.</span>
        <b>All other asset sources or types not listed? </b>Include name of institution where the asset is held, type
          of asset,
          value of asset, and any interest or income from the asset.(i.e. Paintings, coin or stamp collections, artwork,
          show
          cars, antiques, Stocks, bonds or securities, trust funds, pensions, IRAs, Keogh or other retirement accounts,
          whole
          life insurance, contents of a safe deposit box, etc.)</p>
      <table class="incom-information-table-2">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q4" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q4" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Type </h5>
            </label></th>
          <th><label for="">
              <h5>Value</h5>
            </label></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q4_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q4_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q4_type1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q4_type2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q4_amount1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step12_q4_amount2" class="custom-input" placeholder="$">

          </td>
        </tr>
      </table>
      <!-- 5 -->
      <p class="income-label"><span>5.</span>
        <b>Have you disposed of an asset in the last two years?</b> (Ex.: Cash over $1000, a home, other real estate,
        etc.)</p>
      <table class="incom-information-table-2">
        <tr>
          <th><label for="">
              <h5>YES</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q5" value="Yes" />
            </label></th>
          <th><label for="">
              <h5>No</h5> <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step12_q5" value="No" />
            </label></th>
          <th><label for="">
              <h5>Household Member </h5>
            </label></th>
          <th><label for="">
              <h5>Type of
                Disposed Asset </h5>
            </label></th>
          <th><label for="">
              <h5>Value </h5>
            </label></th>
          <th><label for="">
              <h5>Disposed for
                Amount </h5>
            </label></th>

        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q5_household1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q5_household2" class="custom-input">

          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q5_type1" class="custom-input">
            <input type="text" disabled v-model="$parent.application.step12_q5_type2" class="custom-input">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q5_value1ution1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step12_q5_value2" class="custom-input" placeholder="$">
          </td>
          <td>
            <input type="text" disabled v-model="$parent.application.step12_q5_amount1last1" class="custom-input" placeholder="$">
            <input type="text" disabled v-model="$parent.application.step12_q5_amount2" class="custom-input" placeholder="$">
          </td>
        </tr>
      </table>
      <!-- 6 -->
      <p class="income-label"><span>6.</span>
        <b>As needed, please provide notes on any other assets here: </b></p>
      <input type="text" disabled v-model="$parent.application.step12_q6" class="custom-input">
      <!-- 7 -->

    </div>
    <!-- full time student information secton end -->

  </div>
</template>

<script>
export default {
  name: 'Page6',
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
