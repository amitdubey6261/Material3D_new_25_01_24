import { collabMaterial1, collabMaterial2, collabMaterial3, trigger1, trigger2, trigger3 } from "../Collab/Material/CollabMat";
// import { Raycaster } from "../Experience/Raycaster";
import { createMaterialFromJSON } from "./CreateMaterial";

export const processJSON1 = (sofa : THREE.Object3D , className : string ) => {
    fetch('MaterialData/SofaMaterials.json').then((res) => res.json()).then((data:any) => {
        const elems = document.querySelectorAll(className);
        collabMaterial1(sofa , data) ; 
        Array.from(elems).map((elm) => {
            elm.addEventListener('dragend', async (e: Event) => {
                //@ts-ignore
                const thumbnailSelected = e.target.getAttribute('data-variant');
                alert(thumbnailSelected)
                const JSONMaterialData = data[thumbnailSelected] ;
                console.log(JSONMaterialData);
                //@ts-ignore
                const dynamicMaterial = createMaterialFromJSON(JSONMaterialData) ; 
                // trigger(thumbnailSelected) ; 
                console.log(dynamicMaterial);
                trigger1(thumbnailSelected) ; 

                //@ts-ignore
                // sofa.scene.traverse((elem)=>{
                //     //@ts-ignore
                //     if( elem.type == "Mesh"){
                //         //@ts-ignore
                //         elem.material = dynamicMaterial.clone() ;  
                //     }
                // })
                console.log(sofa);
            })
        })
    })
}

export const processJSON2 = (sofa : THREE.Object3D , className : string ) => {
    fetch('MaterialData/SofaMaterials.json').then((res) => res.json()).then((data:any) => {
        const elems = document.querySelectorAll(className);
        collabMaterial2(sofa , data) ; 
        Array.from(elems).map((elm) => {
            elm.addEventListener('dragend', async (e: Event) => {
                //@ts-ignore
                const thumbnailSelected = e.target.getAttribute('data-variant');
                alert(thumbnailSelected)
                const JSONMaterialData = data[thumbnailSelected] ;
                console.log(JSONMaterialData);
                //@ts-ignore
                const dynamicMaterial = createMaterialFromJSON(JSONMaterialData) ; 
                // trigger(thumbnailSelected) ; 
                console.log(dynamicMaterial);
                trigger2(thumbnailSelected) ; 

                //@ts-ignore
                // sofa.scene.traverse((elem)=>{
                //     //@ts-ignore
                //     if( elem.type == "Mesh"){
                //         //@ts-ignore
                //         elem.material = dynamicMaterial.clone() ;  
                //     }
                // })
                console.log(sofa);
            })
        })
    })
}


export const processJSON3 = (sofa : THREE.Object3D , className : string ) => {
    fetch('MaterialData/SofaMaterials.json').then((res) => res.json()).then((data:any) => {
        const elems = document.querySelectorAll(className);
        collabMaterial3(sofa , data) ; 
        Array.from(elems).map((elm) => {
            elm.addEventListener('dragend', async (e: Event) => {
                //@ts-ignore
                const thumbnailSelected = e.target.getAttribute('data-variant');
                alert(thumbnailSelected)
                const JSONMaterialData = data[thumbnailSelected] ;
                console.log(JSONMaterialData);
                //@ts-ignore
                const dynamicMaterial = createMaterialFromJSON(JSONMaterialData) ; 
                console.log(dynamicMaterial);
                console.log(sofa);
                trigger3(thumbnailSelected) ; 
            })
        })
    })
}