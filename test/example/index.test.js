//要測試的函式
const sum =(a,b)=>{
    return a + b
}

/**
 * expect 中呼叫函式測試結果
 *  toBe 預期結果
 */
test('Check the result of 5',()=>{
    // expect 中呼叫函式測試結果
    expect(5 + 2).toBe(7)
})

// toMatch 搭配正則表達式 檢查
test('Use toMatch test',()=>{
    expect('Happy new year.').toMatch(/new/)
})

// toEqual 確認物件是否等於期望值
test('Check the object type',()=>{
    let peopleA={
        name: 'GQSM'
    }
    peopleA.age = 25
    
    // 測試字串
    expect(peopleA.name).toBe('GQSM')
    //測試物件
    expect(peopleA).toEqual({name:'GQSM',age:25})
})

// not 預防函式回傳某個結果
test('Use not',()=>{
    let peopleB={
        name: 'Gay'
    }
    // 確認 name 不等於空
    expect(peopleB.name).not.toBe('')
    peopleB.name= ''
    expect(peopleB.name).toBe('')
})

// 確認數字斷言
test('test integer',()=>{
    // 整數 可以使用 toBe 或 toEqual
    expect(5).toBe(5)
    expect(5).toEqual(5)

    // 測試輸出值是否大於期望值
    expect(5).toBeGreaterThan(4)

    // 測試輸出值是否大於等於期望值
    expect(5).toBeGreaterThanOrEqual(5)

    // 測試輸出值是否小於期望值
    expect(5).toBeLessThan(6)
    expect(5).toBeLessThanOrEqual(5)
})

// toBeCloseTo 測試小數,浮點數 
test('Test float',()=>{
    // 會忽略些微的誤差
    expect(0.1+0.2).toBeCloseTo(0.3)
    // 需完全相等
    expect(0.1+0.2).not.toBe(0.3)
})

// toContain 判斷陣列內是否有值
test('For array test in jest',()=>{
    let arrA =['A','B','C']

    // 檢查陣列是否有某值
    expect(arrA).toContain('B')

    // 搭配迴圈檢查每個位置都不等於空
    for(let i in arrA){
        expect(arrA[i]).not.toBe('')
    }
})

// undefined , null ,true 判斷特殊斷言
test('Special value',()=>{
    // 期望值為 true
    expect(true).toBeTruthy()

    // 期望值為 false
    expect(false).toBeFalsy()

    // 期望值為 null
    expect(null).toBeNull()

    // 期望值為 undefined
    expect(undefined).toBeUndefined()

    // 期望值位 undefined 之外的值
    expect(null).toBeDefined()
})

// 函式與 測試檔案分開
// let func = require('../../funcs/func.js')

// test('test sum',()=>{
//     expect(func.sum(2)).toBe(2) // 由於 test時候 ， 沒有跑 else return b , 需要coverage %

//     expect(func.sum(1,1)).toBe(2)
// })