<template>
  <div class="mian-page-wraper application-print">
    <!-- top- header start -->
    <section class="top-header">
      <div class="application-header">
        <div class="logo">
          <h2>THE VILLAGGIO</h2>
        </div>
        <h3>RENTAL APPLICATION</h3>
        <p class="paragraph-space">
          <strong>Instructions:</strong> Please complete
          <u>ALL</u> sections of this application. Please do not leave any questions blank or use White Out.
          ALL adult household members (18 and over) must sign the application. Screening criteria available upon request. Please
          do not submit multiple applications.
        </p>
        <hr class="paragraph-end" />
        <p class="paragraph-space">
          <strong>Occupancy Limits:</strong> To qualify for each of the unit sizes, please note the minimum and maximum persons required. Please
          see the Tenant Selection Plan for additional information regarding occupancy guidelines.
        </p>
      </div>
    </section>
    <!-- top- header end -->
    <!-- content section start -->
    <section class="content">
      <!-- beadroom section start -->
      <div class="d-flex justify-content-between my-3">
        <div class="bedroom">
          <p class="paragraph-space text-center"> <input type="checkbox" v-model="$parent.application.occupancyLimits" value="1 Bedroom" disabled> 1 Bedroom</p>
          <p class="text-center">(Min. 1 Person Max. 2 People)</p>
        </div>
        <div class="bedroom">
          <p class="paragraph-space text-center"><input type="checkbox" v-model="$parent.application.occupancyLimits" value="2 Bedroom" disabled> 2 Bedroom</p>
          <p class="text-center">(Min. 2 People Max. 4 People)</p>
        </div>
        <div class="bedroom">
          <p class="paragraph-space text-center"><input type="checkbox" v-model="$parent.application.occupancyLimits" value="3 Bedroom" disabled> 3 Bedroom</p>
          <p class="text-center">(Min. 3 People Max. 6 People)</p>
        </div>
        <div class="bedroom">
          <p class="paragraph-space text-center"><input type="checkbox" v-model="$parent.application.occupancyLimits" value="4 Bedroom" disabled> 4 Bedroom</p>
          <p class="text-center">(Min. 4 People Max. 8 People)</p>
        </div>
      </div>
      <!-- beadroom section end -->
      <!-- household section start -->
      <h4>Household Information</h4>
      <p>
        List
        <u>ALL</u> household members that are applying to live in the apartment. Include any household member that is under the
        age of 18 and will reside in the household 50% of the time or more. Be sure to include your own name. Failure to provide
        accurate and complete contact information may result in application denial.
      </p>
      <table>
        <tr>
          <th></th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>MI</th>
          <th>
            Relationship
            <br />to Head of
            <br />Household
          </th>
          <th>
            M/F
            (Optional)
          </th>
          <th>SSN</th>
          <th>
            Birthdate
            MM/DD/YYYY
          </th>
        </tr>
        <tr v-for="(occupant, index) in $parent.application.occupants" :key="occupant.application_id + index">
          <td>
            <b>{{index + 1}}.</b>
          </td>
          <td>
            <input type="text" disabled v-model="occupant.lastName" class="custom-input" />
          </td>
          <td>
            <input type="text" disabled v-model="occupant.firstName" class="custom-input" />
          </td>
          <td>
            <input type="text" disabled v-model="occupant.middelName" class="custom-input" />
          </td>
          <td>
            <input type="text" disabled v-model="occupant.relationship" class="custom-input" />
          </td>
          <td>
            <input type="text" disabled v-model="occupant.gender" style="text-transform: capitalize" class="custom-input" />
          </td>
          <td>
            <input type="text" disabled v-model="occupant.ssn" class="custom-input" />
          </td>
          <td>
            <input type="text" disabled v-model="occupant.birthdate" class="custom-input" />
          </td>
        </tr>
      </table>
      <!-- household section start -->

      <!-- current contact information  start-->
      <div class="current-contact mt-4">
        <h4 class="text-center my-3">
          CURRENT CONTACT INFORMATION
          <span>(Required)</span>
        </h4>
        <div class="preferred-method">
          <div class="first">
            <p>What is your preferred method of being contacted?</p>
          </div>
          <div class="second">
            <label for>
              <input type="radio" disabled id="Mail" name="Mail" v-model="$parent.application.prefferedMethod" value="Mail" />
              <p>Mail</p>
            </label>
          </div>
          <div class="third">
            <label for>
              <input type="radio" disabled v-model="$parent.application.prefferedMethod" value="Email" id="E-Mail" name="E-Mail" />
              <p>E-Mail</p>
            </label>
          </div>
          <div class="third">
            <label for>
              <input type="radio" disabled v-model="$parent.application.prefferedMethod" value="other" id="Other" name="Other" />
              <p>Other</p>
            </label>
          </div>
        </div>
        <div class="other-details">
          <div class="first">
            <label for>
              <span>
                <p>Current Address:</p>
              </span>
              <input type="text" disabled v-model="$parent.application.currentAddress" class="custom-input" />
            </label>
            <label for>
              <span>
                <p>Mobile phone:</p>
              </span>
              <input type="text" disabled v-model="$parent.application.mobilePhone" class="custom-input" />
            </label>
            <label for>
              <span>
                <p>Email Address:</p>
              </span>
              <input type="text" disabled v-model="$parent.application.email" class="custom-input" />
            </label>
          </div>
          <div class="second">
            <label for>
              <span>
                <p>Other Phone:</p>
              </span>
              <input type="text" disabled v-model="$parent.application.otherPhone" class="custom-input" />
            </label>
            <label for>
              <span>
                <p>Other Contact:</p>
              </span>
              <input type="text" disabled v-model="$parent.application.otherContact" class="custom-input" />
            </label>
          </div>
        </div>
      </div>
      <!-- current contact information  end-->
      <!-- resonable accommodatin section start -->
      <div class="resonable-section">
        <h4>Reasonable Accommodation Information</h4>
        <p>
          The Villaggio has accessible units and/or units with accessible features. Applicants may inquire about features of these
          units by contacting the management office (310) 847-7737 or TTY (800) 855-7100.
        </p>
        <div class="design-feild d-flex">
          <div class="left col-10">
            <p>1. Do you require that your apartment be designed for the disabled/mobility impaired?</p>
          </div>
          <div class="rigth col-2 d-flex">
            <label for>
              <input type="radio" disabled v-model="$parent.application.step3_q1" id="apartment" value="Yes" name="yes" />
              <p>Yes</p>
            </label>
            <label class="ml-3">
              <input type="radio" disabled v-model="$parent.application.step3_q1" value="No" id="apartment" name="no" />
              <p>No</p>
            </label>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-6">
            <p>- Please check if applies:</p>
          </div>
          <div class="col-6 d-flex">
            <div class="col-4">
              <label for>
                <input type="checkbox" disabled v-model="$parent.application.step3_q1_applies_for" id="Mobility" value="Mobility" />
                <p>Mobility</p>
              </label>
            </div>
            <div class="col-4">
              <label for>
                <input type="checkbox" disabled v-model="$parent.application.step3_q1_applies_for" id="Vision" value="Vision" />
                <p>Vision</p>
              </label>
            </div>
            <div class="col-4">
              <label for>
                <input type="checkbox" disabled v-model="$parent.application.step3_q1_applies_for" id="Hearing" value="Hearing" />
                <p>Hearing</p>
              </label>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-6">
            <p>‐ Please explain the required modification needed:</p>
          </div>
          <div class="col-6">
            <input type="text" disabled v-model="$parent.application.step3_q1_explaination" class="custom-input" />
          </div>
        </div>
      </div>
      <!-- resonable accommodatin section end -->
      <!-- disablity section start -->
      <p>A person with a disability may ask for:</p>
      <ul>
        <li>
          <p>A change in rules (reasonable accommodation)</p>
        </li>
        <li>
          <p>A physical change to their apartment or shared areas in the building (reasonable modification)</p>
        </li>
        <li>
          <p>An accessible apartment</p>
        </li>
        <li>
          <p>Aids and services to help them communicate with us</p>
        </li>
      </ul>
      <p>
        If you or anyone in your household has a disability and needs any of these things to live at The Villaggio and use our
        services, please contact the management staff to fill out a ‘Reasonable Accommodation or Modification Form.’
      </p>
      <!-- disablity section end-->
    </section>
    <!-- content section end -->
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
