<script>
/* eslint-disable */
</script>
<template>
  <div class="mian-page-wraper application-print">

    <div class="inner-pages">
      <h4 class="heading-h"><u>Effective Communication</u></h4>
      <p>Please notify the management office if you need application assistance such as large type font, information by
        audio tape,
        computer disk, Braille and/or a language other than English. Best efforts will be made to accommodate such
        requests. </p>
      <div class="primery-languages d-flex">
        <div class="col-2 d-flex align-items-center">
          <h5 class="text-center">Primary <br> Languages</h5>
        </div>
        <div class="col-4">
          <label for="" class="justify-content-end">
            <p>(Arabic) عربى <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Arabic"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>English <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="English"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>(Vietnamese) Tiếng Việt <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Vietnamese"></p>
          </label>
        </div>
        <div class="col-3">
          <label for="" class="justify-content-end">
            <p>(Cantonese) 广东话 <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Cantonese"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>(Spanish) Español <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Spanish"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>(Russian) русский <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Russian"></p>
          </label>
        </div>
        <div class="col-3">
          <label for="" class="justify-content-end">
            <p>(Korean) 한국어 <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Korean"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>(Mandarin) 普通话 <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Mandarin"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>(Tagalog) Tagalog <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Tagalog"></p>
          </label>
          <label for="" class="justify-content-end">
            <p>Other <input type="radio" disabled v-model="$parent.application.primaryLanguage" value="Other"></p>
          </label>
        </div>
      </div>
      <!-- other house hold section start -->
      <br>
      <div class="household">
        <h4 class="heading-h"><u>Other Household Information</u></h4>
        <p>We are required to adhere to Federal Fair Housing laws and to encourage a balanced resident population at
          The Villaggio.
          This housing is offered without regard to race, color, religion, sex, gender, gender identity and expression,
          family status,
          national origin, marital status, ancestry, age, sexual orientation, disability, source of income, genetic
          information, arbitrary
          characteristics, or any other basis prohibited by law. As such, we appreciate your checking the appropriate
          boxes below
          regarding your race/ethnicity. You are not obligated to provide this information. If you choose not to
          disclose, please
          indicate below. </p>
        <div class="household-inner ">
          <div class="application-header d-flex">
            <div class="col-4">
              <label for="" class="">
                <p> <input type="checkbox" v-model="$parent.application.race" disabled value="Black">
                  <h4>Black/African American</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Asian">
                  <h4>Asian</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Other Pacific">
                  <h4>Native Hawaiian/Other Pacific
                    Islander</h4>
                </p>
              </label>
            </div>
          </div>
          <div class="household-content d-flex">
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="White">
                  <h4>White/Caucasian</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Indian"> Asian Indian </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Native"> Native Hawaiian </p>
              </label>
            </div>
          </div>
          <!--  -->

          <div class="household-content d-flex">
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Hispanic">
                  <h4>Hispanic</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Chinese"> Chinese </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Guanamian"> Guanamian or Chamorro </p>
              </label>
            </div>
          </div>
          <div class="household-content d-flex">
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Alaska">
                  <h4>American Indian/Alaska Native</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Filipino"> Filipino </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="OtherSamoan">Samoan </p>
              </label>
            </div>
          </div>
          <div class="household-content d-flex">
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Other">
                  <h4>Other</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Vietnamese"> Vietnamese </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Islander"> Other Pacific Islander</p>
              </label>
            </div>
          </div>
          <div class="household-content d-flex">
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Non-Disclosed">
                  <h4>Non-Disclosed</h4>
                </p>
              </label>
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Japanese"> Japanese </p>
              </label>
            </div>
            <div class="col-4">
            </div>
          </div>
          <div class="household-content d-flex">
            <div class="col-4">
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Korean"> Korean </p>
              </label>
            </div>
            <div class="col-4">
            </div>
          </div>
          <div class="household-content d-flex">
            <div class="col-4">
            </div>
            <div class="col-4">
              <label for="" class="">
                <p><input type="checkbox" v-model="$parent.application.race" disabled value="Other Asian"> Other Asian </p>
              </label>
            </div>
            <div class="col-4">
            </div>
          </div>
        </div>
      </div>
      <!-- household section end  -->
      <!-- please cehck here section start -->
      <div class="check-her-section">
        <label for="">
          <div>1.</div>
          <div class="col-10">
            <p>
              Have you been displaced by
              governmental action or have your dwelling been destroyed as a
              result of a disaster formally recognized pursuant to federal disaster relief laws? (<em>If yes, Third –party
                verification will be required</em>).
            </p>
          </div>
          <div class="col-2 d-flex yes-no">
            <div class>
              <p>
                <b>
                  <u>Yes</u>
                </b>
              </p>
              <input type="radio" disabled v-model="$parent.application.step5_q1" value="Yes" />
            </div>
            <div class>
              <p>
                <b>
                  <u>No</u>
                </b>
              </p>
              <input type="radio" disabled v-model="$parent.application.step5_q1" value="No" />
            </div>
          </div>
        </label>
        <br>
        <label for="">
          <div>2.</div>
          <div class="col-10">
            <p>
              Do you live or work in the City of Carson. (<em>If yes, Third –party
                verification will be required</em>).
            </p>
          </div>
          <div class="col-2 d-flex yes-no">
            <div class>
              <p>
                <b>
                  <u>Yes</u>
                </b>
              </p>
              <input type="radio" disabled v-model="$parent.application.step5_q2" value="Yes" />
            </div>
            <div class>
              <p>
                <b>
                  <u>No</u>
                </b>
              </p>
              <input type="radio" disabled v-model="$parent.application.step5_q2" value="No" />
            </div>
          </div>
        </label>
        <br>
        <label for="">
          <div>3.</div>
          <p>
            The Villaggio is a non-smoking and no pet* property. Each applicant 18+ must initial below to acknowledge
            that you
            understand smoking will <u>not</u> be permitted throughout the property up to the property line and that no
            pets are permitted.
            *Assistance animals are not considered pets.
          </p>
        </label>
        <div class="center-input-main d-flex justify-content-center">
          <div class="col-8 d-flex">
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initials HOH">
              <p>Initials Head of Household</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_1">
              <p>Initials for household member 2</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_2">
              <p>Initials for household member 3</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_3">
              <p>Initials for household member 4</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_4">
              <p>Initials for household member 5</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_5">
              <p>Initials for household member 6</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_6">
              <p>Initials for household member 7</p>
            </div>
            <div class="text-center">
              <p> <input type="checkbox" disabled v-model="$parent.application.step5_q3" value="Initial_7">
              <p>Initials for household member 8</p>
            </div>
          </div>
        </div>
        <label for="" class="end-label">
          <div>4.</div>
          <p>
            List any Case Worker or Agency that you are working with, that you would like us to be aware of or contact.
          </p>
        </label>
      </div>
      <!-- please cehck here section end -->
      <div class="agency-section d-flex">
        <div class="col-6">
          <label for="">
            <p>Agency Name:</p> <input disabled v-model="$parent.application.agencyName" type="text" class="custom-input">
          </label>
          <label for="">
            <p>Case Worker Name:</p> <input disabled v-model="$parent.application.workerName" type="text" class="custom-input">
          </label>
        </div>
        <div class="col-6">
          <label for="">
            <p>Agency/Case Worker Phone:</p> <input disabled v-model="$parent.application.agencyPhone" type="text" class="custom-input">
          </label>
          <label for="">
            <p>Email:</p> <input disabled v-model="$parent.application.agencyEmail" type="text" class="custom-input">
          </label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped>
</style>
