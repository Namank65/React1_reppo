import { sum } from "../sum";

test("sum should calculate sum of two numbers", () => {

    const result = sum(3, 6);

    //this line billow is known as assertion 
    expect(result).toBe(9);

})