/**
 * description: 组织架构权限菜单Mock
 * author: luojx
 * createdDate: 2019-07-20
 */
// 菜单列表
const menuList = [{
  code: 'orgmodule',
  icon: 'icon-zuzhiqunzu',
  id: '4a4fcdaba1a3452088f24aa2d5d5f762',
  isauto_refresh: 0,
  name: '组织架构',
  openstyle: 1,
  order: '2',
  parentID: '-1',
  parm: '',
  target: '',
  type: 'M',
  children: [{
    code: 'sysManagement',
    icon: 'form',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '系统管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      code: 'vendorInfoManage',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '厂商信息管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/sysManagement/vendorInfoManage/vendorInfoManage',
      type: 'P'
    },
    {
      code: 'orgconfigurablePageManagement',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '可配置化页面管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/configurablePageManagement/orgconfigurablePageManagement',
      type: 'P'
    },
    {
      code: 'orgconfigurablePageComponentsManagement',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '可配置化组件管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/configurablePageManagement/pageComponentsOrg.vue',
      type: 'P'
    },
    {
      code: 'orgconfigurablePageTableManagement',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '可配置化网格管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/configurablePageManagement/pageTableOrg',
      type: 'P'
    },
    {
      code: 'vendorOrgManage',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '厂商组织结构管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/sysManagement/vendorOrgManage/vendorOrgManage',
      type: 'P'
    },
    {
      code: 'orgstaffManagement',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '厂商员工管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/sysManagement/staffManagement/staffManagement',
      type: 'P'
    },
    {
      code: 'orglookupMamager',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '值列表管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/sysManagement/lookupMamager/lookupMamager',
      type: 'P'
    }
    ]
  },
  {
    code: 'proAndCityControl',
    icon: 'form',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '省份城市划分',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      code: 'orgProvinceOrganization',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '省份管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/ve/basicData/veprovinceOrganization',
      type: 'P'
    },
    {
      code: 'vecityOrganization',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '城市管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/ve/basicData/vecityOrganization',
      type: 'P'
    }
    ]
  },

  {
    code: 'orgCarProduct',
    icon: 'form',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '车辆产品管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      code: 'orgBrandManage',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '品牌管理',
      openstyle: 1,
      order: '2000',
      parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
      parm: '',
      target: '/org/carProduct/carBrandManage',
      type: 'P'
    }]
  },
  {
    code: 'orgglobalPermissionsManagement',
    icon: 'form',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '全局权限管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      code: 'orgbusinessPostManagement',
      icon: '',
      id: '97502a7535e74a129513ef737d4afff4',
      isauto_refresh: 0,
      name: '业务岗位管理',
      openstyle: 1,
      order: '2000',
      parentID: '-1',
      parm: '',
      target: '/org/globalManagement/orgbusinessPostManagement',
      type: 'P'
    },
    {
      children: null,
      code: 'orgWholeRoleManage',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '全局角色管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/wholeLimitManage/wholeRoleManage',
      type: 'P'
    },
    {
      children: null,
      code: 'mdsSysPosition',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e69',
      isauto_refresh: 0,
      name: '系统岗位管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/mdsSysPosition/mdsSysPosition',
      type: 'P'
    }]
  },
  {
    code: 'orgManage',
    icon: '',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '集团管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      children: null,
      code: 'mdmOrgInfoQuery',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '集团信息管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/mdmOrgInfoQuery/mdmOrgInfoQuery',
      type: 'P'
    },
    {
      children: null,
      code: 'vejtxxgl',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '集团信息管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/orgManage/orgManage',
      type: 'P'
    },
    {
      children: null,
      code: 'vejtzjjggl',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '集团组织架构管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/orgManage/groupManage',
      type: 'P'
    }
    ]
  },
  {
    code: 'provinceManage',
    icon: '',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '省份管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      children: null,
      code: 'qxgl',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '区县管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/provinceManage/countryManage',
      type: 'P'
    }]
  },
  {
    code: 'permissionManage',
    icon: '',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '权限管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      children: null,
      code: 'jsyjsqxgl',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '角色与角色权限管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/permissionManage/roleAndPermission',
      type: 'P'
    }, {
      children: null,
      code: 'roleAndPermission',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '角色与角色权限管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/permissionManage/roleAndPermission/roleAndPermission.vue',
      type: 'P'
    }, {
      children: null,
      code: 'jscdgxck',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '角色菜单关系查看',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/permissionManage/roleMenuRelationLook',
      type: 'P'
    },
    {
      children: null,
      code: 'orguserRightsManagement',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '用户权限管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/permissionManage/orguserRightsManagement/orguserRightsManagement',
      type: 'P'
    },
    {
      children: null,
      code: 'roleAuthManage',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '角色权限管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/permissionManage/roleAuthManage/roleAuthManage',
      type: 'P'
    }

    ]
  },
  {
    code: 'dlrInfoManages',
    icon: '',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '经销商信息管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '/org/dlrInfoManages/dlrInfoManages',
    type: 'P'
  },
  {
    code: 'dlrInfoManage',
    icon: '',
    id: '97502a7535e74a129513ef737d4afff4',
    isauto_refresh: 0,
    name: '经销商信息管理',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      children: null,
      code: 'dlrAfterSale',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '经销商售后扩展信息',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/dlrInfoMangament/dlrAfterSales/dlrAfterSales',
      type: 'P'
    },
    {
      children: null,
      code: 'orgDlrGeneralInfo',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '经销商通用部门管理',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/dlrInfoMangament/dlrGeneralInfo/dlrGeneralInfo',
      type: 'P'
    },
    {
      children: null,
      code: 'dlrFinance',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e63',
      isauto_refresh: 0,
      name: '经销商财务扩展信息',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff4',
      parm: '',
      target: '/org/dlrInfoMangament/dlrFinance/dlrFinance',
      type: 'P'
    }
    ]
  },
  {
    code: 'sysInform',
    icon: '',
    id: '97502a7535e74a129513ef737d4afff5',
    isauto_refresh: 0,
    name: '系统通知',
    openstyle: 1,
    order: '2000',
    parentID: '4a4fcdaba1a3452088f24aa2d5d5f762',
    parm: '',
    target: '',
    type: 'M',
    children: [{
      children: null,
      code: 'sysSceneSetting',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e64',
      isauto_refresh: 0,
      name: '系统通知场景定义',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff5',
      parm: '',
      target: '/org/sysInform/mdsSysSceneSetting/mdsSysSceneSetting',
      type: 'P'
    },
    {
      children: null,
      code: 'sysMsgModule',
      icon: '',
      id: '7eca24cebd8b4aa9967e0082f3e31e64',
      isauto_refresh: 0,
      name: '系统通知模板定义',
      openstyle: 1,
      order: '1000',
      parentID: '97502a7535e74a129513ef737d4afff6',
      parm: '',
      target: '/org/sysInform/mdsSysMsgModule/mdsSysMsgModule',
      type: 'P'
    }
    ]
  }
  ]
}
]

export default {
  menuList
}