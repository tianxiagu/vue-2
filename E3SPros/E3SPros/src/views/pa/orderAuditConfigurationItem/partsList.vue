<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button"
         ref="searcheHeight">
      <el-button type="primary"
                 size="small"
                 @click.native="fetchData(1)">查询</el-button>
      <el-button size="small"
                 @click.native="newData('ruleForm')">新增</el-button>
      <el-button size="small"
                 @click.native="modifyData('ruleForm')">修改</el-button>
      <el-button size="small"
                 @click.native="exportData(1)">导出</el-button>
      <el-button size="small"
                 @click.native="resetData()">重置</el-button>
    </div>
    <!-- *******************************弹窗**************************-->
    <el-dialog title="零件数据维护"
               :visible.sync="dialogVisible"
               width="65%"
               :close-on-click-modal="false"
               v-bind:class="isValiad ? 'checkInput' :'validInput'"
               :append-to-body="true">
      <!-- v-bind:class="isValiad ? 'checkInput' :'validInput'" -->

      <div class="filter-container filter-params">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 :inline-message=true>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item prop="elementCode">
                <lableName curLabelName="零件号"
                           :isShowLabel="true"
                           :isRequire="true"></lableName>
                <el-input v-model="ruleForm.elementCode"
                          clearable
                          size="small"
                          v-bind:readonly="isDisplay?true:false"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="elementNameCn">
                <lableName curLabelName="零件中文名"
                           :isShowLabel="true"
                           :isRequire="true"></lableName>
                <el-input v-model="ruleForm.elementNameCn"
                          clearable
                          size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <lableName curLabelName="零件英文名"
                           :isShowLabel="true"
                           :isRequire="false"></lableName>
                <el-input v-model="ruleForm.elementNameEn"
                          clearable
                          size="small"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item prop="partTypeId">
                <lableName curLabelName="备件类别"
                           :isShowLabel="true"
                           :isRequire="true"></lableName>
                <el-select v-model="ruleForm.partTypeId"
                           size="small"
                           placeholder="请选择"
                           clearable>
                  <el-option v-for="item in partTypeIdOptions"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item prop="unit">
                <lableName curLabelName="计量单位"
                           :isShowLabel="true"
                           :isRequire="true"></lableName>
                <el-input v-model="ruleForm.unit"
                          clearable
                          size="small"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item prop="isEnable">
                <lableName curLabelName="状态"
                           :isShowLabel="true"
                           :isRequire="true"></lableName>
                <el-select v-model="ruleForm.isEnable"
                           size="small"
                           placeholder="请选择"
                           clearable>
                  <el-option v-for="item in statusOption"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item>
                <lableName curLabelName="备注"
                           :isShowLabel="true"
                           :isRequire="false"></lableName>
                <el-input v-model="ruleForm.remark"
                          clearable
                          size="small"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8"></el-col>
            <el-col :span="8"></el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item class="dialog-footer">
                <el-button type="primary"
                           @click="commitXiuGai('ruleForm')">保存</el-button>
                <el-button type="primary"
                           @click="deleteXiuGai1('ruleForm')">取消</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!--************************************ 查询区 *********************************  -->
    <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询区</div> -->
    <div class="filter-container filter-params"
         ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="5">
          <label>零件号</label>
          <el-input v-model="dataInfo.elementCode"
                    clearable
                    size="small"></el-input>
        </el-col>
        <el-col :span="5">
          <label>零件中文名</label>
          <el-input v-model="dataInfo.elementNameCn"
                    clearable
                    size="small"></el-input>
        </el-col>
        <el-col :span="5">
          <label>零件英文名</label>
          <el-input v-model="dataInfo.elementNameEn"
                    clearable
                    size="small"></el-input>
        </el-col>
        <el-col :span="5">
          <label>状态</label>
          <el-select v-model="dataInfo.isEnable"
                     size="small"
                     placeholder="请选择"
                     clearable>
            <el-option v-for="item in statusOption"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-button icon="el-icon-plus"
                     @click="changeToggleParam"
                     class="moreParam">更多</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="24"
              v-show="toggleParam">
        <el-col :span="5">
          <label>备件类别</label>
          <el-select v-model="dataInfo.partTypeId"
                     size="small"
                     placeholder="请选择"
                     clearable>
            <el-option v-for="item in partTypeIdOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="5">
          <label>计量单位</label>
          <el-input v-model="dataInfo.unit"
                    clearable
                    size="small"></el-input>
        </el-col>
      </el-row>
    </div>
    <!--*****************************************查询结果************************************-->
    <div class="filter-container filter-title"
         ref="resultTitleHeight">查询结果</div>
    <el-table v-loading="listLoading"
              :data="list"
              element-loading-text="Loading"
              border
              fit
              stripe
              :height="tableHeight"
              highlight-current-row
              @row-click="handleRowClick"
              ref="multipleTable">
      <!-- <el-table-column label="选择" type="selection" width="60" align="center" ></el-table-column>   -->
      <el-table-column align="center"
                       label="序号">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column label="零件号"
                       align="center"
                       prop="elementCode">
        <template slot-scope="scope">{{ scope.row.elementCode }}</template>
      </el-table-column>

      <el-table-column label="零件中文名称"
                       align="center"
                       prop="elementNameCn">
        <template slot-scope="scope">{{ scope.row.elementNameCn }}</template>
      </el-table-column>

      <el-table-column label="零件英文名称"
                       align="center"
                       prop="elementNameEn">
        <template slot-scope="scope">{{ scope.row.elementNameEn }}</template>
      </el-table-column>

      <el-table-column label="备件类别"
                       align="center"
                       prop="partTypeName">
        <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
      </el-table-column>

      <el-table-column label="计量单位"
                       align="center"
                       prop="unit">
        <template slot-scope="scope">{{ scope.row.unit }}</template>
      </el-table-column>

      <el-table-column label="状态"
                       align="center"
                       prop="isEnableName">
        <template slot-scope="scope">{{ scope.row.isEnableName }}</template>
      </el-table-column>

      <el-table-column label="备注"
                       align="center"
                       prop="remark">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
    </el-table>
    <el-pagination background
                   ref="paginationHeight"
                   layout="prev, pager, next, sizes, ->, total"
                   prev-text="上一页"
                   next-text="下一页"
                   :page-sizes="[10, 20, 30]"
                   :page-size="10"
                   :total="list?listRecords:0"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { the_Height } from "@/components/se/seMixins/makeHeight";
import {
  doQueryList4,
  doQueryList3,
  doQueryList8
} from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";
import { log } from "util";

export default {
  mixins: [the_Height],
  components: {
    LookupValue,
    lableName
  },

  data () {
    return {
      //备件类别下拉框
      partTypeIdOptions: [],
      //状态下拉框
      statusOption: [],
      flag: false,
      listRecords: 0,
      labelName1: "状态",
      labelName2: "备件类型",
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示lable
      looluptype1: "DB0052", //值列表查询编码，自行修改成变量
      looluptype2: "PA0009",
      str: '',

      tableHeight: 400, //首先给定table的默认高度
      tableMarginHeight: 15,
      isValiad: false,
      toggleParam: false,
      count: false, //计数
      isDisplay: false,
      list: [],
      dialogList: "",
      dialogVisible: false,
      listLoading: true,
      dialogModel: "",
      rowDetail: "",
      rowColumn: "",
      excelName: "", //导出参数
      excelSheetName: "",
      currentRow: "",
      apiConfig: null, // API配置对象
      apiQueryRow: [], // 表格中台返回网格的字段

      dataInfo: {
        //(查询)回传给后台的查询条件
        pageIndex: 1,
        pageSize: 10,
        oemCode: "",
        groupCode: "",
        elementCode: "",
        elementCode: "",
        elementNameEn: "",
        elementNameCn: "",
        partTypeId: "",
        isEnable: "",
        unit: ""
      },

      listQuery: {
        pageIndex: "",
        pageSize: ""
      },
      lookupVari: [
        "oemCode",
        "groupCode",
        "lookupTypeCode",
        "lookupValueCode",
        "lookupValueName"
      ],
      ruleForm: {
        pageIndex: "",
        pageSize: "",
        mutation: "",
        oemCode: "",
        groupCode: "",
        elementId: "",
        elementCode: "",
        elementNameEn: "",
        elementNameCn: "",
        isEnable: "",
        unit: "",
        remark: "",
        partTypeId: "",
        partTypeCode: "",
        updateControlId: "",
        creator: "",
        modifier: ""
      },


      rules: {
        elementCode: [
          { required: true, message: "请输入零件号", trigger: "change" }
        ],
        elementNameCn: [
          { required: true, message: "请输入中文名", trigger: "change" }
          // { min: 2, max: 5, message: "2~5个字符", trigger: "change" }
        ],
        isEnable: [
          { required: true, message: "请选择状态", trigger: "change" }
          // { min: 7, max: 11, message: '长度在7到11个字符之间', trigger: 'change'}
        ],
        partTypeId: [
          { required: true, message: "请选择类别", trigger: "change" }
          // { min: 7, max: 11, message: '长度在7到11个字符之间', trigger: 'change'}
        ],
        unit: [
          { required: true, message: "请输入计量单位", trigger: "change" }
          // { min: 1, max: 3, message: "1~3个字符", trigger: "change" }
        ]
      }
    };
  },

  created () {
    this.fetchData(1);
    this.queryPaDbAttrTypeList();
    this.initFetchData();
  },

  methods: {
    changeToggleParam () {
      // console.log("点击1" + this.count);
      if (!this.count) {
        this.toggleParam = true;
        // window.addEventListener("click", () => {
        //   this.setTableHeight(true);
        // });
        // this.$nextTick(() => {
        //   this.setTableHeight();
        // });
        this.count = true;
      } else {
        // console.log("点击2" + this.count);
        this.toggleParam = false;
        // window.addEventListener("click", () => {
        //   this.setTableHeight(true);
        // });
        // this.$nextTick(() => {
        //   this.setTableHeight();
        // });
        this.count = false;
      }
    },

    initFetchData (page) {
      const that = this
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfoA: ' + orgApis.mdsLookupValueQueryByPage.InputType + ')',
        // 请求API
        apiUrl: paApis.paDbPartListQueryList.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              '(dataInfo: $dataInfoA, pageIndex: $pageIndex, pageSize: $pageSize)',
            // 表格中台返回网格的字段
            apiQueryRow: that.lookupVari
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: that.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfoA: {
            "isEnable": "1",
            "lookupTypeCode": "PA0039"//状态 
          }
        }
      }
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === '1') {
          if (page) {
            //查询完返回指定的page页数
            that.dataInfo.pageIndex = page
          }
          /// that.statusOption= response.data.mdsLookupValueQueryByPage.rows;
          var temp_array = [];
          response.data.mdsLookupValueQueryByPage.rows.forEach(row => {
            temp_array.push({
              value: row.lookupValueCode,
              label: row.lookupValueName
            });
          });
          that.statusOption = temp_array;
          that.listLoading = false
        } else {
          this.$message({
            message: '查询失败：' + response.msg,
            type: 'warn',
            uration: 2000
          })
        }
      })
    },

    //查询备件类别
    queryPaDbAttrTypeList () {
      doQueryList8().then(response => {
        var resData = response.data[paApis.paDbAttrTypeQueryList.ServiceCode];
        if (resData.result === "1" && resData.rows != "") {
          let list = response.data[paApis.paDbAttrTypeQueryList.ServiceCode].rows;
          var temp_array = [];
          list.forEach(row => {
            temp_array.push({
              value: row.partTypeId,
              label: row.partTypeName
            });
          });
          this.partTypeIdOptions = temp_array;
        }
      });
    },

    fetchData (page) {
      //查询
      this.doQuery(page, "notExcel");
    },

    exportData (page) {
      //导出
      this.doQuery(page, "excel");
    },

    doQuery (page, dataType) {
      // console.log("检测");
      this.listLoading = true;
      let obj = {};
      obj.oemCode = this.dataInfo.oemCode;
      obj.groupCode = this.dataInfo.groupCode;
      obj.elementCode = this.dataInfo.elementCode;
      obj.elementNameEn = this.dataInfo.elementNameEn;
      obj.elementNameCn = this.dataInfo.elementNameCn;
      obj.partTypeId = this.dataInfo.partTypeId;
      obj.isEnable = this.dataInfo.isEnable;
      obj.unit = this.dataInfo.unit;

      var pageSize = dataType == "excel" ? 99999 : this.dataInfo.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;
      //   console.log("tableColumns:" + JSON.stringify(tableColumns));

      doQueryList4(
        pageSize,
        page || this.dataInfo.pageIndex,
        obj,
        dataType,
        "零件清单导出",
        "零件清单列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          this.$utils.downloadFile(response, this.date());
        } else {
          if (
            response.data[paApis.paDbElementQueryList.ServiceCode].result ===
            "1"
          ) {
            if (page) {
              this.dataInfo.pageIndex = page;
            }
            this.list =
              response.data[paApis.paDbElementQueryList.ServiceCode].rows;
            this.listRecords = parseInt(
              response.data[paApis.paDbElementQueryList.ServiceCode].records
            );
          }
        }
        this.listLoading = false;
      });
    },

    newData (formName) {
      this.dialogVisible = true;
      this.isDisplay = false;

      if (this.dialogVisible) {
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields();
        }
        this.ruleForm.elementCode = "";
        this.ruleForm.elementNameCn = "";
        this.ruleForm.elementNameEn = "";
        this.ruleForm.partTypeId = "";
        this.ruleForm.unit = "";
        this.ruleForm.isEnable = "";
        this.ruleForm.remark = "";
      }
    },

    handleRowClick (row, event, column) {
      //行点击事件
      this.rowDetail = row;
      this.rowColumn = column;
      this.flag = column.isTrusted;
      // console.log("点击行");
      // console.log(this.rowColumn.isTrusted);
      // console.log("点击行");
    },

    modifyData (formName) {
      //修改
      console.log("给弹窗中的数据赋值");
      this.dialogList = this.rowDetail;
      console.log(this.dialogList);
      console.log("给弹窗中的数据赋值");

      if (this.flag) {
        this.dialogVisible = true;
        this.isDisplay = true;
        this.isValiad = false;
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields();
        }
        this.ruleForm.elementId = this.rowDetail.elementId;
        this.ruleForm.elementCode = this.rowDetail.elementCode;
        this.ruleForm.elementNameCn = this.rowDetail.elementNameCn;
        this.ruleForm.elementNameEn = this.rowDetail.elementNameEn;
        this.ruleForm.isEnable = this.rowDetail.isEnable;
        this.ruleForm.unit = this.rowDetail.unit;
        this.ruleForm.remark = this.rowDetail.remark;
        this.ruleForm.partTypeId = this.rowDetail.partTypeId;
        this.ruleForm.updateControlId = this.rowDetail.updateControlId;
        //   console.log(">>>>"+this.ruleForm.updateControlId + this.ruleForm.elementId);
      } else {
        this.$alert("请选择一行进行修改！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => { }
        });
      }
    },

    deleteXiuGai1 (formName) {
      //修改弹窗中取消操作
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
      this.ruleForm.elementCode = "";
      this.ruleForm.elementNameCn = "";
      this.ruleForm.elementNameEn = "";
      this.ruleForm.partTypeId = "";
      this.ruleForm.unit = "";
      this.ruleForm.isEnable = "";
      this.ruleForm.remark = "";
      this.dialogVisible = false;
      this.isValiad = false;
    },

    commitXiuGai (formName) {
      //修改弹窗中的保存操作(零件清单维护)
      console.log("修改弹窗中的保存操作");
      console.log(this.ruleForm);

      this.$refs[formName].validate(valid => {
        let obj = {};
          obj.elementId = this.ruleForm.elementId;
          obj.elementCode = this.ruleForm.elementCode;
          obj.elementNameEn = this.ruleForm.elementNameEn;
          obj.elementNameCn = this.ruleForm.elementNameCn;
          obj.isEnable = this.ruleForm.isEnable;
          obj.unit = this.ruleForm.unit;
          obj.remark = this.ruleForm.remark;
          obj.partTypeId = this.ruleForm.partTypeId;
          obj.updateControlId = this.ruleForm.updateControlId;
        
          doQueryList3(obj).then(response => {
            if (valid) {
            if (response.data[paApis.paDbElementMutationSave.ServiceCode].result === "1") {
              this.$message({
                message: "保存成功！",
                type: "success"
              });
              this.isValiad = false;
              this.dialogVisible = false;
              this.flag = false;
              this.fetchData(1);
            } else {
              this.$message({
                message:
                  "保存失败：" +
                  response.data[paApis.paDbElementMutationSave.ServiceCode].msg,
                type: "warn",
                uration: 2000,
              });
              this.isValiad = false;
            }
            }else {
              this.$message({
                message:
                  "保存失败：" +
                  response.data[paApis.paDbElementMutationSave.ServiceCode].msg,
                type: "warn",
                uration: 2000,
              });
              this.isValiad = false;
            }
            //alert(response.data.paDbElementMutationSave.msg);
          })
         
      });
    },

    resetData () {
      //重置
      (this.dataInfo.elementCode = ""),
        (this.dataInfo.elementNameEn = ""),
        (this.dataInfo.elementNameCn = ""),
        (this.dataInfo.partTypeId = ""),
        (this.dataInfo.isEnable = ""),
        (this.dataInfo.unit = ""),
        (this.dataInfo.isEnable = ""),
        (this.dataInfo.partTypeId = "");
    },

    date () {   //获取当前时间
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }

      var hour = "00" + date.getHours();
      hour = hour.substr(hour.length - 2);
      var minute = "00" + date.getMinutes();
      minute = minute.substr(minute.length - 2);
      var second = "00" + date.getSeconds();
      second = second.substr(second.length - 2);

      // var str = year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";

      var str = year.toString() + month.toString() + day.toString() + hour + minute + second;
      return "零件清单导出" + str + ".xlsx";
      // console.log("str:"+this.str);
    },

    getRepairStatus1 (val) {
      this.dataInfo.isEnable = val;
    },
    getRepairStatus2 (val) {
      this.dataInfo.partTypeId = val;
    },
    getRepairStatus3 (val) {
      this.ruleForm.partTypeId = val;
    },
    getRepairStatus4 (val) {
      this.ruleForm.isEnable = val;
    },

    handleSizeChange (val) {
      this.dataInfo.pageSize = val;
      this.fetchData(1);
    },
    handleCurrentChange (val) {
      this.dataInfo.pageIndex = val;
      this.fetchData();
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog .el-form-item {
  margin: 0;
}
</style>