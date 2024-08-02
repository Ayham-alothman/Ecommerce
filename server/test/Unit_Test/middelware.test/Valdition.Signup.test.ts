import { Request,Response,NextFunction } from "express";
import {ValditionSignup} from '../../middelware/Valdition.Signup'
describe('test all cases to signup',()=>{
    let mockReq:Partial<Request>;
    let mockRes:Partial<Response>;
    let mockFun:NextFunction;
    beforeAll(()=>{
      mockFun=jest.fn();
      mockRes={
        status:jest.fn(),
        json:jest.fn()
      }
      mockReq={body:{}}
    })

    it(`case 1 body do't have any property`,async()=>{
      await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 2 body have email but do't have name or password `,async()=>{
      mockReq.body.email='ayham@gmail';
      await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 3 body have email and name but do't have password `,async()=>{
      mockReq.body.email='ayham@gmail';
      mockReq.body.name="ayham";
      await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 4 body have email and password and name but length password less then 8 chars `,async()=>{
      mockReq.body.email='ayham@gmail';
      mockReq.body.name='ayham';
      mockReq.body.password='1234';
      await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(`there miss data`);
    })

    it(`case 5 body have email and password and name but email length email less then 8 `,async()=>{
      mockReq.body.email='a@111';
      mockReq.body.name='ayham';
      mockReq.body.password='1234567456'
      await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(`there miss data`);
    })

    describe(`cases email valdition pattren and body have email and password and name and both email and password have length>=8`,()=>{
      
      
      
      it(`do't found any char before @ like @gmail.com`,async()=>{
        mockReq.body.name='ayham';
        mockReq.body.password='1234567456'
        mockReq.body.email='@gmail.com'
        await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
        expect(mockRes.status).toHaveBeenCalledWith(403);
        expect(mockRes.json).toHaveBeenCalledWith(`the email not valid`);

      })

      it(`do't found any char after ayham@gmail `,async()=>{
        mockReq.body.name='ayham';
        mockReq.body.password='1234567456'
        mockReq.body.email='ayham@gamil'
        await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
        expect(mockRes.status).toHaveBeenCalledWith(403);
        expect(mockRes.json).toHaveBeenCalledWith(`the email not valid`);

      })

      it(`do't found  char @ in emaiil  `,async()=>{
        mockReq.body.name='ayham';
        mockReq.body.password='1234567456'
        mockReq.body.email='ayhamgamil.com'
        await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
        expect(mockRes.status).toHaveBeenCalledWith(403);
        expect(mockRes.json).toHaveBeenCalledWith(`the email not valid`);

      })

    })

    it(`set name and password =>len(password)>=8 and email valid =>len(email)>=8 `,async()=>{
      mockReq.body.name='ayham';
      mockReq.body.password='13213123123213w'
      mockReq.body.email='ayham@gmail.com'
      await ValditionSignup(mockReq as Request,mockRes as Response,mockFun);
      expect(mockFun).toHaveBeenCalled();
    })

   
})