import { ydoc } from "../Collab"

const addDelMap = ydoc.getMap('AddDel');

export const addDelete = (carpet: any) => {
    addDelMap.set("checked", true);
    const specificObjectToggleCheckbox = document.getElementById('specificObjectToggle') as HTMLInputElement;
    specificObjectToggleCheckbox.addEventListener('change', () => {
        const isActivated = specificObjectToggleCheckbox.checked;
        addDelMap.set("checked" , isActivated) ; 

        // Toggle visibility of the specific object based on the checkbox state
        // carpet.visible = isActivated ; 
    });

    addDelMap.observe(()=>{
        const param = addDelMap.get("checked") ; 
        carpet.visible = param ; 
        //@ts-ignore
        specificObjectToggleCheckbox.checked = param ; 
    })

}