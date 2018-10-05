import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  #components-layout-demo-top-side-2 {
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.2);  
    margin: 16px 28px 16px 0;
    float: left;
    color:white;
  }
  .icon{
    color:white;
    font-size:50;
  }

  .ant-layout-has-sider{
    min-height: 100vh;
    height: auto
  }
  label{
    color: rgba(0, 0, 0, 0.4) !important;
    font-size: 16px;
    font-weight: 600;
    

  }
  .btn{
    margin-right:20px;
  }
  .ant-input {
    width:200px;
    margin: 0 8px 8px 0;
    border:none;
    border-radius:0 !important;
    border-bottom:2px solid #1890ff;
    .box{
      margin-right:3px;
    }
    
    :hover{
      border-bottom:1px solid grey !important;
      border-color:transparent;
    }
    :focus{
      outline:none;
      box-shadow:none;
    }
  }

  .DataPicker{
    width:200px;
    margin: 0 8px 8px 0;
    border:none;
    border-radius:none;
    .box{
      margin-right:3px;
    }
    .DatePicker:hover{
      border-color:transparent;
    }
    .DatePicker:focus{
      outline:none;
      box-shadow:none;
    }
  }

  .Output{
    margin-top:30px;
    width:100%;
  }

  .m-l-10{
    margin-left:10px
  }
  
  .m-v-30{
    margin-top:30px;
    margin-bottom:30px;
  }
  .has-error .ant-input:focus{
    border-color:none;
    box-shadow:none;
  }
  .has-error .ant-input:not([disabled]):hover{
    border-color:none;
  }
  .ant-layout-header .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
    background-color: transparent !important;
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected:active{
    background-color: none;
    border-color:black;
}
.input{
  background-color:none;
  box-shadow:none;
}
.ant-input {
  transition: 0s all ease-in-out;
}
.ant-custom-menu-item{
  padding: 0 32px !important;
}
.input_menu{
  position:absolute;
  display:inline-block;
  width: auto;
  color: black;
  transition: 0.24s all ease-in-out;
  background: #000;
  left:3%;
  top: 65px;
  z-index:5;
  li{
    padding: 0 32px
    :hover{
      .ant-tooltip-open{
        display: none;
      }
    }
  }
}
`;
