export function removeAllChildNodes(parent: any) {
    console.log(parent);
    if (!parent){
        return;
    }
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}