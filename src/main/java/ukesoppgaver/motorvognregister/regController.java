package ukesoppgaver.motorvognregister;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class regController {

    public final List<Bil> alleBiler = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBil (Bil innBil){
        alleBiler.add(innBil);
    }
    @GetMapping("/hentAlle")
        public List <Bil> hentAlle(){
            return alleBiler;
        }
    @GetMapping("/slettAlle")
        public void slettAlle(){
            alleBiler.clear();
    }
}


