package test.steps;

import java.io.IOException;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Mas;
import io.cucumber.java.pt.Quando;
import test.core.BaseTest;
import test.pages.HomePage;
import test.pages.UsuarioCadastradoPage;
import tests.util.Captures;

public class CadastroUsuarios extends BaseTest {
	HomePage pageHome = new HomePage();
	Captures captures = new Captures();
	UsuarioCadastradoPage pageUsuarioCadastrado = new UsuarioCadastradoPage();

	@Dado("que estou no site da Stefanini")
	public void que_estou_no_site_da_Stefanini() {
		pageHome.acessoSite();
	}

	@E("preencho {string}")
	public void preencho(String nome) throws InterruptedException {
		pageHome.acessarNome(nome);
	}

	@E("preencho o {string}")
	public void preencho_o(String email) throws InterruptedException {
		pageHome.acessarEmail(email);
	}

	@E("preencho a {string}")
	public void preencho_a(String senha) throws InterruptedException {
		pageHome.acessarSenha(senha);
	}

	@Quando("clico em cadastrar")
	public void clico_em_cadastrar() throws InterruptedException {
		pageHome.acessarCadastrar();

		captures.screenshot("Mensagem Obrigat�ria");
	}

	@Então("verifico se não consigo logar sem preenchimento de algum campo obrigatório através da {string}")
	public void verifico_se_não_consigo_logar_sem_preenchimento_de_algum_campo_obrigatório_através_da(String string)
			throws IOException, InterruptedException {
		pageHome.acessarCadastrar();

		Assert.assertEquals(string, pageHome.obterMensagemObrigatoria());

		captures.screenshot(string);
		super.finaliza();
	}

	@Então("valido se foi cadastrado corretamente {string}")
	public void validoSeFoiCadastradoCorretamente(String tituloUsuarioCadastrado) throws InterruptedException, IOException {

		Assert.assertEquals(tituloUsuarioCadastrado, pageUsuarioCadastrado.verificarUsuarioCadastrado());
		captures.screenshot(tituloUsuarioCadastrado);

	}

	@Mas("excluo para gerenciamento de massa")
	public void excluo_para_gerenciamento_de_massa() throws InterruptedException, IOException {
		pageUsuarioCadastrado.excluirUsuarioCadastrado();
		super.finaliza();
	}

}
