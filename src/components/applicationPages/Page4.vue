<script>
/* eslint-disable */
</script>
<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages fourth-page">
      <!-- rental  section -->
      <h4 class="heading-h"><u>Rental History and Housing References</u></h4>
      <p>Please list all locations you have lived in the last FIVE (5) years starting with CURRENT address. In addition,
        please list ALL
        States where household members have lived. (If additional space is required, use the back of this page.)
      </p>
      <table class="table table-bordered rental-history-table">
        <thead>
          <tr>
            <th>Landlord’s Information</th>
            <th>Your Information</th>
            <th>Own/Rent</th>
            <th>Current Resident</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(residence, index) in $parent.application.residences" :key="residence.application_id + index">
            <td>
              <p><b>({{index + 1}})</b><u class="ml-2">Name:</u> {{residence.landlordName}}</p>
              <p><u class="ml-4">Address:</u> {{residence.landlordAddress}}</p>
              <p><u class="ml-4">Address:</u> {{residence.landlordPhone}}</p>
            </td>
            <td>
              <p><u>Name:</u> {{residence.name}}</p>
              <p><u>Address:</u> {{residence.address}}</p>
              <p><u>Phone:</u> {{residence.phone}}</p>
            </td>
            <td>{{residence.ownOrRent}}</td>
            <td>{{residence.currentResident}}</td>
            <td>
              <p><u>From:</u> {{residence.startDate}}</p>
              <p><u>End:</u> {{residence.endDate}}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- application status section start -->
      <div class="application-status">
        <h4 class="headind"><u>Applicant Status </u></h4>
        <!-- 1 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>1.</span>Will you or any ADULT household member require a live-in care
              attendant?
            </p>
          </div>
          <div class="col-2 d-flex yes-no  justify-content-center">
            <div class="">
              <p><b><u>Yes</u></b></p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step9_q1" value="Yes"/>
            </div>
            <div class="">
              <p><b><u>No</u></b></p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step9_q1" value="No"/>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-1"></div>
          <div class="col-3">
            <p>Name of Attendant:</p>
          </div>
          <div class="col-7"><input type="text" disabled v-model="$parent.application.step9_q1_name" class="custom-input width-full-input"></div>
          <div class="col-1"></div>
        </div>
        <div class="d-flex">
          <div class="col-1"></div>
          <div class="col-3">
            <p>Relationship (if any): </p>
          </div>
          <div class="col-7"><input type="text" disabled v-model="$parent.application.step9_q1_relation" class="custom-input width-full-input"></div>
          <div class="col-1"></div>
        </div>
        <!-- 2 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>2.</span>Do you currently, at the time of application, receive Section 8
              rental assistance?
            </p>
          </div>
          <div class="col-2 d-flex without-label  justify-content-center">
            <div class="">
                  <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step9_q2" value="Yes"/>
            </div>
            <div class="">
                  <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step9_q2" value="No"/>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-1"></div>
          <div class="col-3">
            <p>Name of Agency:</p>
          </div>
          <div class="col-7"><input type="text" disabled v-model="$parent.application.step9_q2_name" class="custom-input width-full-input"></div>
          <div class="col-1"></div>
        </div>
        <div class="d-flex">
          <div class="col-1"></div>
          <div class="col-3">
            <p>Contact Person: </p>
          </div>
          <div class="col-7"><input type="text" disabled v-model="$parent.application.step9_q2_contact" class="custom-input width-full-input"></div>
          <div class="col-1"></div>
        </div>
        <!-- 3 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>3.</span>Do you currently have or are you expecting a Section 8, Choice
              Voucher, V.A.S.H., or other Voucher?
            </p>
          </div>
          <div class="col-2 d-flex   without-label justify-content-center">
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step9_q3" value="Yes"/>
            </div>
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step9_q3" value="No"/>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-1"></div>
          <div class="col-3">
            <p>Name of Agency:</p>
          </div>
          <div class="col-7"><input type="text" disabled v-model="$parent.application.step9_q3_name" class="custom-input width-full-input"></div>
          <div class="col-1"></div>
        </div>
        <div class="d-flex">
          <div class="col-1"></div>
          <div class="col-3">
            <p>Contact Person: </p>
          </div>
          <div class="col-7"><input type="text" disabled v-model="$parent.application.step9_q3_date" class="custom-input width-full-input"></div>
          <div class="col-1"></div>
        </div>
      </div>
      <!-- application status section end-->
      <!-- full time student information secton start -->
      <div class="full-timeStudent">
        <h4 class="headind"><u>Full Time Student Information </u></h4>
        <p>This apartment is governed by Federal and/or State Housing Program(s) that restrict full-time students. We
          must
          determine your household student status prior to eligibility and, if such eligibility is granted, each
          subsequent year you
          remain in the unit. <b>If unsure of Full-Time status, inquire with academic institution for determination of
            “Full-Time”
            prior to completing the following section.</b>
        </p>
        <br>
        <!-- 1 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>1.</span>Are you or any member of your household above (including minors)
              currently a Full-Time Student?
            </p>
          </div>
          <div class="col-2 d-flex yes-no  justify-content-center">
            <div class="">
              <p><b><u>Yes</u></b></p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q1" value="Yes" />
            </div>
            <div class="">
              <p><b><u>No</u></b></p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q1" value="No" />
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>2.</span>Do you or any member of your household above (including minors)
              anticipate becoming a Full-Time
              Student?
            </p>
          </div>
          <div class="col-2 d-flex  without-label  justify-content-center">
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q2" value="Yes" />
            </div>
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q2" value="No" />
            </div>
          </div>
        </div>
        <h5 class="text-center question"><b>If Yes to either question, complete the following: </b></h5>
        <!-- 3 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>3.</span>Will you or any ADULT household member require a live-in care
              attendant?
            </p>
          </div>
          <div class="col-2 d-flex yes-no  justify-content-center">
            <div class="">
              <p><b><u>Yes</u></b></p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q3" value="Yes" />
            </div>
            <div class="">
              <p><b><u>No</u></b></p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q3" value="No" />
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>4.</span>Any of the Full-Time Student(s) enrolled in a Job Training
              Program receiving assistance under the Job
              Training Partnership Act?
            </p>
          </div>
          <div class="col-2 d-flex  without-label justify-content-center ">
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q4" value="Yes" />
            </div>
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q4" value="No" />
            </div>
          </div>
        </div>
        <!-- 5 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>5.</span>Any Full-Time Student(s) a single parent living w/ his/her minor
              child who is not claimed on another’s
              Tax Return?
            </p>
          </div>
          <div class="col-2 d-flex  without-label  justify-content-center">
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q5" value="Yes" />
            </div>
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q5" value="No" />
            </div>
          </div>
        </div>
        <!-- 6 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>6.</span>Any of the Full-Time Student(s) a TANF or Title IV recipient?</p>
          </div>
          <div class="col-2 d-flex without-label  justify-content-center">
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q6" value="Yes" />
            </div>
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q6" value="No" />
            </div>
          </div>
        </div>
        <!-- 7 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label"><span>7.</span>Any Full-Time Student(s) under the age of 24, who has exited the
              Foster Care System within the last 6
              years?
            </p>
          </div>
          <div class="col-2 d-flex  without-label justify-content-center">
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q7" value="Yes" />
            </div>
            <div class="">
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step10_q7" value="No" />
            </div>
          </div>
        </div>
        <!-- 8 -->
      </div>
      <!-- full time student information secton end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page4',
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped>
.table th, .table td{
  border-color: black;
}
.table th {
  color: black;
  font-weight: bold;
}
.table td {
  color: black;
}
</style>
