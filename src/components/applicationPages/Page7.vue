<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages seventh-page">
      <h4 class="heading-h"><u>Community Interest </u></h4>
      <div class="income-label d-flex"><span>1.</span>
        <p>We are providing extensive recreation facilities and activities at this property for the enjoyment of our residents. Since
          we are always looking for assistance to coordinate special programs and activities, we would appreciate a brief
          description of your skills, interests, hobbies and any assistance/leadership you might provide to these programs.</p>
      </div>
      <div class="income-label d-flex"><span></span><span></span>
        <p>{{$parent.application.step13_q1}}</p>
      </div>
      <div class="income-label drug-section d-flex">
        <div><span>2.</span></div>
        <div>
          <p><b>Drug and Crime Free Acknowledgement: </b>Your initials below will acknowledge that you understand that this
            apartment community will vigorously enforce a drug and crime free environment. You and your guests agree not to
            engage in any drug-related activity, including the manufacture, sale, distribution, use, or possession of illegal drugs.
            These activities are a material violation of the lease and good cause for termination of tenancy. <u><b>Each adult household
                member 18+ initials below.</b> </u></p>
        </div>
      </div>
      <div class="center-input-main d-flex justify-content-center drug-center">
        <div class="col-8 d-flex">
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initials HOH">
            <p>Initials HOH</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_1">
            <p>Initials for household member 2</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_2">
            <p>Initials for household member 3</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_3">
            <p>Initials for household member 4</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_4">
            <p>Initials for household member 5</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_5">
            <p>Initials for household member 6</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_6">
            <p>Initials for household member 7</p>
          </div>
          <div class="text-center">
            <p> <input type="checkbox" disabled v-model="$parent.application.step13_q2" value="Initial_7">
            <p>Initials for household member 8</p>
          </div>
        </div>
      </div>
      <h4 class="heading-h"><u>Credit Information </u></h4>
      <h5 class="notice-reg">Notice Regarding California Investigative Consumer Reporting Agencies Act:</h5>
      <label for="" class="notice-label"><input type="checkbox" disabled v-model="$parent.application.step14_notice" value="agree">
        <p>Landlord does <u>not</u> intend to request an investigative consumer report regarding the Applicant. </p>
      </label>
      <p>Unless the box above is checked, pursuant to California Civil Code section 1786.16(a)(3), the Landlord intends to request
        an investigative consumer report in connection with the Applicant’s application for housing. The investigative consumer
        report will be made concerning the Applicant’s character, general reputation, personal characteristics, and mode of living.
        Among other things, the investigative consumer report may contain information concerning the Applicant’s creditworthiness,
        any court judgments against the Applicant, and any criminal charges and/or convictions. Pursuant to California Civil Code
        section 1786.22, any files maintained on the Applicant by the investigative consumer reporting agency from which Landlord
        obtains the report shall be made available to you during normal business hours and upon reasonable notice, provided you
        furnish proper identification, as follows: (1) The Applicant may appear in person at the investigative consumer reporting
        agency below to request a copy of the Applicant’s file; (2) the Applicant may make a written request for copies of the
        Applicant’s files to be sent via certified mail to a designated addressee; or (3) the Applicant may make a written request for
        a summary of the file to be provided over the telephone. “Proper identification” includes documents such as a valid driver’s
        license, social security account number, military identification card, and credit cards. If one of these forms of identification
        cannot be provided, the agency may ask for other forms of identification in accordance with California Civil Code section
        1786.22(c). The investigative consumer reporting agency may charge a fee, not to exceed the actual copying costs, if the
        Applicant requests a copy of the Applicant’s file. The agency is required to have personnel available to explain the
        Applicant’s file to the Applicant, and the agency must explain to the Applicant any coded information appearing in the file. If
        the Applicant chooses to appear in person, the Applicant may choose to bring another person of his/her choice with him/her,
        provided that the accompanying person also bring proper identification with him/her. If the Applicant brings another person
        with him/her, the agency may require the Applicant to sign an authorization allowing the agency to discuss the Applicant’s
        file in the presence of that other person. </p>
      <!-- full time student information secton end -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Page7',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
