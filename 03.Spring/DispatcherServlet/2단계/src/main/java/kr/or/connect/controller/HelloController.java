package kr.or.connect.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import kr.or.connect.bean.HelloSpring;

public class HelloController implements Controller{

	@Autowired
	HelloSpring helloSpring;  // 부모 컨텍스트인 root컨텍스트로부터 HelloSpring 빈을 DI받을 수 있다.
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String name = request.getParameter("name"); //1.사용자 요청 해석
		
		String message = this.helloSpring.sayHello(name);  //2.비즈니스 로직 호출
		
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("message", message);  //3.모델 정보 생성
		
		return new ModelAndView("/WEB-INF/views/hello.jsp", model);  //4.뷰 지정 (/WEB-INF 하위에 지정하면 사용자가 jsp에 직접 접근 할 수 없음)
	}

}
