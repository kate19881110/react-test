
import {render,screen} from '@testing-library/react';

import Button from "../../src/component/button";

test("Button display hi",async()=>{
    // 1. 把 Button render到畫面
    render(<Button/>);
    // 檢查畫面有什麼元素 screen.debug()
    // screen.debug()
    expect(screen.getByRole("button")).toHaveTextContent(/hi/i)
    expect(
        screen.getByRole('button', {
            name: /hi/i
          })
    ).toBeInTheDocument()//是否有在這文件裡面
})
