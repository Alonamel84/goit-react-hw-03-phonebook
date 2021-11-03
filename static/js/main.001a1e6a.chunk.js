(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={delButton:"ContactItem_delButton__ZLot9",contactItem:"ContactItem_contactItem__3ob7T"}},14:function(t,e,n){t.exports={label:"FilterName_label__3KMeE"}},15:function(t,e,n){t.exports={contactList:"ContactList_contactList__llKNk"}},2:function(t,e,n){t.exports={label:"ContactForm_label__3NC6C",form:"ContactForm_form__100Hz",addButton:"ContactForm_addButton__2Aj77"}},22:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(16),i=n(13),l=n(5),u=n(6),m=n(8),b=n(7),d=n(4),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={number:"",name:""},t.handleChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(e){if(e.preventDefault(),t.setState({name:"",number:""}),t.props.contact.some((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()})))return alert("".concat(t.state.name," is already in contacts"));t.props.onSubmit(t.state)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.onFormSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,type:"text",placeholder:"Enter name",value:e,onChange:this.handleChange})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",pattern:"\\+?\\d{(1, 4)}?[-.\\s]?\\(?\\d{(1, 3)}?\\)?[-.\\s]?\\d\r {(1, 4)}[-.\\s]?\\d{(1, 4)}[-.\\s]?\\d{(1, 9)}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438\r \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange})]}),Object(f.jsx)("button",{className:j.a.addButton,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=p,x=(n(22),n(14)),C=n.n(x),v=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{className:C.a.label,children:["Find contacts by name",Object(f.jsx)("input",{name:"filter",type:"text",placeholder:"Enter name",value:e,onChange:n})]})})},_=n(15),g=n.n(_),N=n(11),y=n.n(N),S=function(t){var e=t.name,n=t.number,a=t.onDelete,c=t.id;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("li",{className:y.a.contactItem,id:c,children:[e," ",n,Object(f.jsx)("button",{className:y.a.delButton,type:"button",onClick:function(){a(c)},children:"Delete"})]})})},k=function(t){var e=t.filterContacts,n=t.onDelete;return Object(f.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){return Object(f.jsx)(S,{name:t.name,number:t.number,onDelete:n,id:t.id},t.id)}))})},D=n(9),w=n.n(D),F=function(t){Object(m.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.handleSubmit=function(e){var a=n(23),c=Object(i.a)({id:a.generate()},e);t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))},t.filterName=function(e){e.preventDefault(),t.setState({filter:e.currentTarget.value})},t.filter=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.onDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("keyContact"));this.setState({contacts:t||[]})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("keyContact",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.filter();return Object(f.jsxs)("div",{className:w.a.container,children:[Object(f.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.handleSubmit,contact:this.state.contacts}),Object(f.jsx)("h2",{className:w.a.title,children:"Contacts"}),Object(f.jsx)(v,{value:this.state.filter,onChange:this.filterName}),Object(f.jsx)(k,{filterContacts:t,onDelete:this.onDelete})]})}}]),a}(a.Component),L=F;o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"data_container__2LifZ",title:"data_title__1DKtb"}}},[[32,1,2]]]);
//# sourceMappingURL=main.001a1e6a.chunk.js.map