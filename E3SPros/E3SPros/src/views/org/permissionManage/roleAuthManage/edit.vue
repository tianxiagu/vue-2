<!--
* description: 成员管理-新增、修改弹窗
* author: mjq
* createdDate: 2019-08-14
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.sysRoleMutationCommonSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        } /*确认*/,
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } /*重置*/,
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        } /*取消*/
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.roleName"),
          /*角色名称*/ codeField: "roleName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.orgName"),
          /*所属部门*/ codeField: "orgName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          disabled: !this.isAdd()
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.roleCode"),
          /*角色编码*/ codeField: "roleCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.roleDesc"),
          /*角色描述*/ span: 16,
          type: "textarea",
          codeField: "roleDesc",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
        // {compKey: 'compKey5', labelName: '角色ID', codeField: 'roleId', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true, hidden: true},
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.modifyingRoleInformation") /*修改员工信息*/,
        add: this.$t("org.label.addingRoleInformation") /*新增员工信息*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        roleName: "",
        orgName: "",
        orgId: "",
        roleCode: "",
        roleDesc: "",
        roleId: ""
      }
    };
  },
  created() {
    if (this.isUseRowData) {
      for (var key in this.formField) {
        if (this.dynamicEditRowData[key]) {
          this.formField[key] = this.dynamicEditRowData[key];
        } else {
          this.formField[key] = "";
          // 两层处理
          for (var rKey in this.dynamicEditRowData) {
            if (rKey.indexOf(".") > -1) {
              var tmpKey = rKey.split(".")[1];
              if (tmpKey === key) {
                this.formField[tmpKey] = this.dynamicEditRowData[rKey];
                break;
              }
            }
          }
        }
      }
    }
  },
  methods: {
    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        var saveObj = {};
        if (that.popupsState === "edit") {
          saveObj = {
            roleName: this.formField.roleName,
            orgId: this.formField.orgId,
            roleCode: this.formField.roleCode,
            roleDesc: this.formField.roleDesc,
            roleId: this.formField.roleId
          };
        } else {
          saveObj = {
            roleName: this.formField.roleName,
            orgId: this.formField.orgId,
            // orgName:this.formField.orgName,
            roleCode: this.formField.roleCode,
            roleId: this.formField.roleId,
            roleDesc: this.formField.roleDesc
          };
        }
        //保存表单
        this.saveForm(saveObj);
      }
    }
  }
};
</script>
 <style lang="scss" scoped>
/deep/ .el-col-16 .csslableName {
  width: 14.2%;
}
/deep/ .el-col-16 label {
  width: 17.3%;
}

/deep/ .el-textarea {
  float: left;
  width: 90.6% !important;
}
/deep/.el-col-16 .el-input {
    width: 80.3%;
}
</style>

