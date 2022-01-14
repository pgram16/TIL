package kr.or.connect.bean;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;


/*
 * applicationContext.xml 에 HelloSpring bean을 등록하였고 
 * root context가 바르게 생성되는지 테스트해본다.
 * 
 */
@WebServlet("/BeanTest")
public class BeanTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 스프링 어플리케이션 컨텍스트를 사용하는 방법은 WebApplicationContextUtils를 이용하는 것이다.
		ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
		
		HelloSpring helloSpring = ac.getBean(HelloSpring.class);
		
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		
		out.println("<html>");
		out.println("<head><title>Insert title here</title></head>");
		out.println("<body>");
		
		out.println(helloSpring.sayHello("Root Context!!"));
		
		out.println("</body>");
		out.println("</html>");
	}


}
