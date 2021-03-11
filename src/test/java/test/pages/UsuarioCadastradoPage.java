package test.pages;

import static test.core.DriverFactory.getDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import test.core.BasePage;

public class UsuarioCadastradoPage extends BasePage {

	private By usuarioCadastrado = By.xpath("//div//h2[contains(text(),'Usuários cadastrados')]");
	private By excluir = By.id("removeUser1");

	public String verificarUsuarioCadastrado() {
		WebDriverWait wait = new WebDriverWait(getDriver(), 30);
		wait.until(ExpectedConditions
				.presenceOfElementLocated(By.xpath("//div//h2[contains(text(),'Usuários cadastrados')]")));

		return super.obterTexto(usuarioCadastrado);
	}

	public void excluirUsuarioCadastrado() {
		WebDriverWait wait = new WebDriverWait(getDriver(), 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("removeUser1")));

		super.clicarBotao(excluir);
	}

}
