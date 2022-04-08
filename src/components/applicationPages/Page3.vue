<template>
  <div class="mian-page-wraper application-print">
    <div class="inner-pages third-page">
      <h4 class="heading-h">
        <u>Current Residence</u>
      </h4>
      <p class="third-page-label">
        <span>1.</span> How did you hear about this property?
      </p>
      <div class="poperty-section d-flex">
        <div class="col-3">
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Flyer" disabled  />
            <p>Flyer</p>
          </label>
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Walk-By" disabled  />
            <p>Walk-By</p>
          </label>
        </div>
        <div class="col-3">
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Internet" disabled  />
            <p>Internet</p>
          </label>
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Newspaper" disabled  />
            <p>Newspaper</p>
          </label>
        </div>
        <div class="col-3">
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Friend" disabled  />
            <p>Friend</p>
          </label>
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Center" disabled  />
            <p>Comm. Center</p>
          </label>
        </div>
        <div class="col-3">
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="HCIDLA" disabled  />
            <p>HCIDLA</p>
          </label>
          <label for>
            <input type="checkbox" v-model="$parent.application.heardFrom" value="Other" disabled  />
            <p>Other</p>
            <input type="text" disabled class="custom-input" v-model="$parent.application.heardFromOther"  />
          </label>
        </div>
      </div>
      <!-- 2 -->
      <div class="rent-main-section d-flex">
        <div class="col-6">
          <p class="third-page-label">
            <span>2.</span> What is your current monthly rent?
          </p>
        </div>
        <div class="col-4">
          <div class="d-flex">
            <p>$</p>
            <input type="text" v-model="$parent.application.monthlyRent" disabled class="custom-input" />
            <p>/month</p>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <!-- 3 -->
      <div class="rent-main-section d-flex">
        <div class="col-7">
          <p class="third-page-label">
            <span>3.</span> Why do you intend to vacate your current residence?
          </p>
        </div>
        <div class="col-5">
          <input type="text" disabled v-model="$parent.application.whyVacateCurrentPlace" class="custom-input full-width-input" />
        </div>
      </div>
      <!-- 4 -->
      <div class="of-Bedrooms d-flex">
        <div class="col-5">
          <p class="third-page-label">
            <span>4.</span> What is the size of your current residence?
          </p>
        </div>
        <div class="col-7">
          <label for>
            <p class="bed"># of Bedrooms</p>
            <input type="text" disabled v-model="$parent.application.currentResidenceSize" class="custom-input bed-input" />
          </label>
          <p class="text-center">(Please indicate “0” for a studio or bachelor unit)</p>
        </div>
      </div>
      <!-- 5 -->
      <div class="d-flex">
        <div class="col-10">
          <p class="third-page-label">
            <span>5.</span> Do you expect any additions to the household within the next 12 months?
          </p>
        </div>
        <div class="col-2 d-flex yes-no">
          <div class>
            <p>
              <b>
                <u>Yes</u>
              </b>
            </p>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q5" value="Yes" />
          </div>
          <div class>
            <p>
              <b>
                <u>No</u>
              </b>
            </p>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q5" value="No" />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-3">
          <p>Name & Relationship:</p>
        </div>
        <div class="col-8">
          <input type="text" disabled v-model="$parent.application.step6_q5_name_and_relationship" class="custom-input width-full-input" />
        </div>
        <div class="col-1"></div>
      </div>
      <div class="d-flex">
        <div class="col-3">
          <p>Explanation:</p>
        </div>
        <div class="col-8">
          <input type="text" disabled v-model="$parent.application.step6_q5_explanation" class="custom-input width-full-input" />
        </div>
        <div class="col-1"></div>
      </div>
      <!-- 6 -->
      <div class="d-flex">
        <div class="col-10">
          <p class="third-page-label">
            <span>6.</span> Is there anyone living with you now who would not be living with you at this property?
          </p>
        </div>
        <div class="col-2 d-flex yes-no">
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q6" value="Yes" />
          </div>
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q6" value="No" />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-1"></div>
        <div class="col-3">
          <p>Name & Relationship:</p>
        </div>
        <div class="col-7">
          <input type="text" disabled v-model="$parent.application.step6_q6_name" class="custom-input width-full-input" />
        </div>
        <div class="col-1"></div>
      </div>
      <div class="d-flex">
        <div class="col-1"></div>
        <div class="col-3">
          <p>Explanation:</p>
        </div>
        <div class="col-7">
          <input type="text" disabled v-model="$parent.application.step6_q6_explanation" class="custom-input width-full-input" />
        </div>
        <div class="col-1"></div>
      </div>
      <!-- 7 -->
      <div class="d-flex">
        <div class="col-10">
          <p class="third-page-label">
            <span>7.</span> Are there any absent household members who under normal conditions would live with you?
          </p>
        </div>
        <div class="col-2 d-flex yes-no">
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q7" value="Yes" />
          </div>
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q7" value="No" />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-1"></div>
        <div class="col-3">
          <p>Explanation:</p>
        </div>
        <div class="col-7">
          <input type="text" disabled v-model="$parent.application.step6_q7_explanation" class="custom-input width-full-input" />
        </div>
        <div class="col-1"></div>
      </div>
      <!-- 8 -->
      <div class="d-flex">
        <div class="col-10">
          <p class="third-page-label">
            <span>8.</span> Are you currently separated or estranged from your spouse?
          </p>
        </div>
        <div class="col-2 d-flex yes-no">
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q8" value="Yes" />
          </div>
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q8" value="No" />
          </div>
        </div>
      </div>
      <!-- 9 -->
      <div class="d-flex">
        <div class="col-10">
          <p class="third-page-label">
            <span>9.</span> Do you or any household members own a car?
          </p>
        </div>
        <div class="col-2 d-flex yes-no">
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q9" value="Yes" />
          </div>
          <div class>
            <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step6_q9" value="No" />
          </div>
        </div>
      </div>
      <!-- end -->
      <div class="d-flex justify-content-centet">
        <div class="col-4">
          <p>If yes, how many cars?</p>
        </div>
        <div class="col-6">
          <label for>
            <p class="number-of-cars">Number of cars:</p>
            <input type="text" disabled v-model="$parent.application.step6_q9_cars" class="custom-input" />
          </label>
        </div>
      </div>
      <br />
      <!-- Household Background Information  section start -->
      <div class="household-background-section">
        <h4>
          <u>Household Background Information</u>
        </h4>
        <!-- 1 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label">
              <span>1.</span> Have you, or anyone else named on this application, filed for bankruptcy?
            </p>
          </div>
          <div class="col-2 d-flex yes-no">
            <div class>
              <p>
                <b>
                  <u>Yes</u>
                </b>
              </p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q1" value="Yes" />
            </div>
            <div class>
              <p>
                <b>
                  <u>No</u>
                </b>
              </p>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q1" value="No" />
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-2">
            <p>Explanation:</p>
          </div>
          <div class="col-9">
            <input type="text" disabled v-model="$parent.application.step7_q1_explanation" class="custom-input width-full-input" />
          </div>
          <div class="col-1"></div>
        </div>
        <!-- 2 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label">
              <span>2.</span> Have you, or anyone else name on this application, been convicted of a felony?
            </p>
          </div>
          <div class="col-2 d-flex yes-no">
            <div class>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q2" value="Yes" />
            </div>
            <div class>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q2" value="No" />
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-2">
            <p>Explanation:</p>
          </div>
          <div class="col-9">
            <input type="text" disabled v-model="$parent.application.step7_q2_explanation" class="custom-input width-full-input" />
          </div>
          <div class="col-1"></div>
        </div>
        <!-- 3 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label">
              <span>3.</span>Have you or anyone else named on this application been evicted from a rental unit of any type
              including an apartment, home, mobile home or trailer?
            </p>
          </div>
          <div class="col-2 d-flex yes-no">
            <div class>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q3" value="Yes" />
            </div>
            <div class>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q3" value="No" />
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-2">
            <p>Explanation:</p>
          </div>
          <div class="col-9">
            <input type="text" disabled v-model="$parent.application.step7_q3_explanation" class="custom-input width-full-input" />
          </div>
          <div class="col-1"></div>
        </div>
        <!-- 4 -->
        <div class="d-flex">
          <div class="col-10">
            <p class="third-page-label">
              <span>4.</span>Have you or anyone else named on this application been convicted of drug/paraphernalia use,
              possession, or distribution?
            </p>
          </div>
          <div class="col-2 d-flex yes-no">
            <div class>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q4" value="Yes" />
            </div>
            <div class>
              <input id="do-you-expect" type="radio" disabled v-model="$parent.application.step7_q4" value="No" />
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-2">
            <p>Explanation:</p>
          </div>
          <div class="col-9">
            <input type="text" disabled v-model="$parent.application.step7_q4_explanation" class="custom-input width-full-input" />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
