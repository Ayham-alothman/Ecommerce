import { ValditionSignin } from "../../middelware/Valdition.Signin";
import { Request,Response,NextFunction } from "express";

describe('test all cases to signin',()=>{
    let mockRequestt:Partial<Request>;
    let mockResponse:Partial<Response>;
    let nextFunction:NextFunction;
   
    beforeEach(() => {
        
        mockResponse = {
          json: jest.fn(),
          status:jest.fn()
        }
        nextFunction=jest.fn();
      });
    

    it(`case 1 empty body no set email or password`,async()=>{
      mockRequestt = {body:{}};
       await ValditionSignin(mockRequestt as Request,mockResponse as Response,nextFunction);
       expect(mockResponse.status).toHaveBeenCalledWith(403);
       expect(mockResponse.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 2 body have email but have't password`,async()=>{
      mockRequestt={body:{email:"ayhma@gmail.com"}};
      await ValditionSignin(mockRequestt as Request,mockResponse as Response,nextFunction);
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 3 body have password but have't email`,async()=>{
      mockRequestt={body:{password:"1234325dfdf"}};
      await ValditionSignin(mockRequestt as Request,mockResponse as Response,nextFunction);
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 4 body have email have length < 8 and  have password`,async()=>{
      mockRequestt={body:{email:'abcd',password:"1234325dfdf"}};
      await ValditionSignin(mockRequestt as Request,mockResponse as Response,nextFunction);
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 5 body have email have length > 8 and  have password have lenght < 8`,async()=>{
      mockRequestt={body:{email:'ayham@gmail.com',password:"12343"}};
      await ValditionSignin(mockRequestt as Request,mockResponse as Response,nextFunction);
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 6 body have email and password both have length > 8 `,async()=>{
      mockRequestt={body:{email:'ayham@gmail.com',password:"1234325dfdf"}};
      await ValditionSignin(mockRequestt as Request,mockResponse as Response,nextFunction);
      expect(nextFunction).toHaveBeenCalledTimes(1);
    })

})