//import { Component } from "react";

import PageNotFound from "../pages/PageNotFound";
import homepage from "../pages/admin/message/homepage";
import List from "../pages/admin/record/List";


export const otherRoutes=[{
    path:"/404",
    component:PageNotFound
}];


export  const adminRoutes=[{
    path:"/admin/message",
    component:homepage,
    title:"主页",
    icon:"SafetyCertificateOutlined"
},{
    path:"/admin/record",
    component:List,
    title:"交易信息",
    icon:"TableOutlined"
}]