package test.core;

import java.io.IOException;

import org.junit.After;
import org.junit.Before;

public class BaseTest {
	
//	@Before
//	public void inicializar() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\dimi_\\Desktop\\chrome\\chromedriver.exe");
//		DriverFactory.getDriver().get("http://prova.stefanini-jgr.com.br/teste/qa/");
//		
//	}

//	@After
	public void finaliza() throws IOException {
		DriverFactory.killDriver();
	}

}
