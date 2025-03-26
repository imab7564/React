//4
function customRender(reactElement,container)
{
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for (const prop in reactElement.props) 
        {
        if(prop==='children') continue;

        domElement.setAttribute(prop,reactElement.props[prop])
    }
}

//2
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'Click me to visit google'
}

//1
const mainContainer=document.querySelector('#root')

//now our task is to inject this const reactElement in root
//we can do this by calling a function(here it is named as customRender) to render reactElement in the container

//3
customRender(reactElement,mainContainer)