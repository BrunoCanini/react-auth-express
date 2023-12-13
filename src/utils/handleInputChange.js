export function handleInputChange(e, key, setterCb){

    const value = e.target.value;
    const checked = e.target.chacked;

    let newValue = e.target.type === "checkbox" ? checked : value;

    setterCb((prev) => {
        return {
            ...prev,
            [key] : newValue,
        }
    })

}