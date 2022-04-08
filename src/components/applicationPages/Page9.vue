<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages ninth-page">
      <h4 class="heading-h"><u>Signature Clause </u></h4>
      <!-- all application section -->
      <div class="upon-notification">
        <p>Upon notification by landlord of application processing, I agree to pay CanThe Villaggio an application screening
          charge in the
          amount required by landlord. I will be issued a Receipt for Application Fee upon payment which will authorize
          The Villaggio to obtain any such credit reports, character reports and/or criminal reports, and verification of rental
          and employment
          history as it deems necessary to verify all information set forth in this application. I understand that I
          will acquire no rights to
          the above property until I sign a rental agreement and submit a security deposit. I further understand that
          false, fraudulent
          misleading or incomplete information may be grounds for denial of tenancy or subsequent eviction. There are no
          other
          agreements express or implied between the parties. </p>
        <p>I understand that management is relying on this information to prove my household’s eligibility for housing
          at The Villaggio.
          I certify that all information and answers to the above questions are true and complete to the best of my
          knowledge. I
          understand that providing false or misleading information or making false statements may be grounds for denial
          of my
          application. I also understand that such action may result in criminal penalties. </p>
        <p>I authorize and consent to have management verify the information contained in this application for purposes
          of proving my
          eligibility for occupancy. I will provide all necessary information including source names, addresses, phone
          numbers, and
          account numbers where applicable and any other information required for expediting this process. I understand
          that my
          occupancy is contingent on meeting management’s resident selection criteria and any low-income housing program
          requirements. </p>
        <p>In accordance with state and federal laws, I have been notified that an investigation may be made of the
          information I
          provided on this application together with information as to my character, general reputation, personal
          characteristics, and
          mode of living. I understand that I have the right to dispute the accuracy of information obtained from the
          entities I have
          disclosed above, and, upon written request, the right to a complete and accurate disclosure of any scope of
          this
          investigation and/or a written summary of my rights under the Fair Credit Reporting Act. </p>
      </div>
      <h4 class="text-center">All adult household members must sign below: </h4>
      <div class="center-input-main d-flex justify-content-center drug-center">
        <div class="col-3 d-flex">
          <div class="text-center">
            {{$parent.application.step15_head_signature}}
            <p class="border-top"><b>Head of Household Signature</b></p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_head_signature_date}}
            <p class="border-top"><b>Date</b></p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult1_signature}}
            <p class="border-top"><b>Other Adult Signature</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult1_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
      </div>
      <div class="center-input-main d-flex  drug-center">
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult2_signature}}
            <p class="border-top"><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult2_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult3_signature}}
            <p class="border-top"><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult3_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
      </div>
      <div class="center-input-main d-flex  drug-center">
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult4_signature}}
            <p class="border-top"><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult4_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult5_signature}}
            <p class="border-top"><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult5_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
      </div>
      <div class="center-input-main d-flex  drug-center">
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult6_signature}}
            <p class="border-top"><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult6_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult7_signature}}
            <p class="border-top"><b>Other Adult Signature </b> </p>
          </div>
        </div>
        <div class="col-3">
          <div class="text-center">
            {{$parent.application.step15_adult7_signature_date}}
            <p class="border-top"><b>Date</b> </p>
          </div>
        </div>
      </div>
      <h4 class="text-center"><u>For Management Use</u></h4>
      <br>
      <div class="for-managemnt-section d-flex">
        <div class="col-7">
          <label for="">
            <p>Date & Time received by Management:</p> <input type="text" class="custom-input">
          </label>
        </div>
        <div class="col-5">
          <label for="">
            <p class="received">Received by:</p> <input type="text" class="custom-input">
          </label>

        </div>
      </div>
      <br>
      <p><span class="warning">WARNING</span> “Title 18, Section 1001 of the U.S. Code states that a person is guilty of
        a felony for knowingly and willingly
        making false or fraudulent statements to any department of the United States Government. HUD and any owner (or
        any
        employee of HUD or the owner) may be subject to penalties for unauthorized disclosures or improper use of
        information
        collected based on the consent form. Use of the information collected based on this verification form is
        restricted to the
        purposes cited above. Any person who knowingly or willingly requests, obtains or discloses any information under
        false
        pretenses concerning an applicant or participant may be subject to a misdemeanor and fined not more than $5,000.
        Any
        applicant or participant affected by negligent disclosure of information may bring civil action for damages, and
        seek other
        relief, as may be appropriate, against the officer or employee of HUD or the owner responsible for the
        unauthorized
        disclosure or improper use. Penalty provisions for misusing the social security number are contained in the
        **Social Security
        Act at 208 (a) (6), (7) and (8). Violation of these provisions are cited as violations of 42 U.S.C. 408 (a) (6),
        (7) and (8)</p>
      <!-- full time student information secton end -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Page9',
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped>
.border-top {
  border-top: 1px solid black !important;
}
</style>
