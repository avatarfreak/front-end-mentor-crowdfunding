export let totalPledges = 0;
export const setPledge = (pledge = 0): void => {
    totalPledges = totalPledges + pledge;
}

export const getPledge = () => {
    return totalPledges;
}