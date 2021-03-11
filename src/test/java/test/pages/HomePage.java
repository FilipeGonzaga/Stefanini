package test.pages;

import static test.core.DriverFactory.getDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import test.core.BasePage;
import tests.util.Captures;

public class HomePage extends BasePage {

	private By inputNome = By.id("name");
	private By inputEmail = By.id("email");
	private By inputSenha = By.id("password");
	private By botaoCadastrar = By.id("register");

	private By textoSemNome = By.xpath("//*[@id='name']/../p");
	private By textoSemEmail = By.xpath("//*[@id='email']/../p");
	private By textoSenha = By.xpath("//*[@id=\"password\"]/../p");

	public void acessoSite() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\dimi_\\Desktop\\chrome\\chromedriver.exe");
		getDriver().get("http://prova.stefanini-jgr.com.br/teste/qa/");

	}

	public void acessarNome(String nome) throws InterruptedException {

		WebDriverWait wait = new WebDriverWait(getDriver(), 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("name")));

		Captures captures = new Captures();
		captures.screenshot("1 Acessar Home");

		super.escrever(inputNome, nome);

	}

	public void acessarEmail(String email) throws InterruptedException {

		WebDriverWait wait = new WebDriverWait(getDriver(), 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("email")));

		super.escrever(inputEmail, email);

	}

	public void acessarSenha(String senha) throws InterruptedException {

		WebDriverWait wait = new WebDriverWait(getDriver(), 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("password")));

		super.escrever(inputSenha, senha);

	}

	public void acessarCadastrar() throws InterruptedException {
		super.clicarBotao(botaoCadastrar);

	}

	public String obterMensagemObrigatoria() throws InterruptedException {

		try {
			return super.obterTexto(textoSemNome);
		} catch (Exception e) {
			try {
				return	super.obterTexto(textoSemEmail);

			} catch (Exception e1) {
				return super.obterTexto(textoSenha);

			}
		}

	}

}