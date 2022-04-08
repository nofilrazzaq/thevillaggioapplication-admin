<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages eight-page">

      <div class="income-label d-flex">
        <p>The agency that will prepare the investigative consumer report on the Applicant is: </p>
      </div>
      <br>
      <div class="rengrow">
        <input type="text" class="custom-input full-width-input font-weight-bold" disabled v-model="$parent.application.step14_name">
        <label for="">
          <p>Name of Agency </p>
        </label>
      </div>
      <br>
      <div class="rengrow">
        <input type="text" class="custom-input full-width-input font-weight-bold" disabled v-model="$parent.application.step14_address">
        <label for="">
          <p>Address of Agency </p>
        </label>
      </div>
      <!-- all application section -->
      <div class="all-application">
        <p>If you would like a copy of the report(s) that is/are prepared, please check the box below: </p>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" disabled class="custom-control-input" id="recieveCopy" value="Yes" v-model="$parent.application.step_14_recieveCopy">
          <label class="custom-control-label" for="recieveCopy">I would like to receive a copy of the report(s) that is/are prepared.</label>
        </div>
        <p>Landlord agrees that Landlord, or Landlord’s agent, will send the Applicant a copy of the report within three
          (3) business
          days of the date the report is provided to Landlord. The copy of the report will contain the name, address,
          and telephone
          number of the agency that issued the report and how to contact the agency. </p>
        <p>If Landlord takes adverse action against Applicant, and the adverse action is based in whole or in part on
          the contents of the
          investigative consumer report, then, pursuant to California Civil Code section 1786.40(a), Landlord shall so
          advise Applicant
          and shall supply Applicant with the name and address of the agency that prepared the report on which
          Landlord’s decision
          was based in whole or in part. </p>
        <p>PLEASE SIGN BELOW TO AUTHORIZE A CREDIT REPORT, EVICTION REPORT, AND CRIMINAL BACKGROUND
          CHECK. Management will perform a credit and eviction history and may perform a criminal background check of
          all
          applicants as a part of the applicant screening criteria. <b>Your application will not be considered unless
            you provide
            management with your consent to obtain a credit, eviction, and criminal background report on each adult
            household member.</b> </p>
      </div>

      <div class="center-input-main d-flex justify-content-center drug-center">
        <div class="col-3 d-flex">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_head_signature" class="custom-input">
            <p><b>Head of Household Signature</b></p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_head_signature_date" class="custom-input">
            <p><b>Date</b></p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult1_signature" class="custom-input">
            <p><b>Other Adult Signature</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult1_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
      </div>
      <div class="center-input-main d-flex drug-center">
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult2_signature" class="custom-input">
            <p><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult2_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult3_signature" class="custom-input">
            <p><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult3_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
      </div>
      <div class="center-input-main d-flex drug-center">
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult4_signature" class="custom-input">
            <p><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult4_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult5_signature" class="custom-input">
            <p><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult5_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
      </div>
      <div class="center-input-main d-flex drug-center pb-3">
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult6_signature" class="custom-input">
            <p><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult6_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult7_signature" class="custom-input">
            <p><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            <input type="text" disabled v-model="$parent.application.step14_adult7_signature_date" class="custom-input">
            <p><b>Date</b> </p>
          </div>
        </div>
      </div>
      <!-- full time student information secton end -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Page8',
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped>
</style>
