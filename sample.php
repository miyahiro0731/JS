<?php
    class Company{
        protected $name;
        protected $adress;
        protected $number;
        public function setName($name){
            $this->name = $name;
        }
        public function setAdress($adress){
            $this->adress = $adress;
        }
        public function setNumber($number){
            $this->number = $number;
        }
        public function displayCompany(){
            echo "会社名:".$this->name;
            echo "\n";
            echo "住所:".$this->adress;
            echo "\n";
            echo "電話番号:".$this->number;
            echo "\n";
        }
    }
    class Department extends Company{
        private $department;
        private $leader;
        public function setDepartment($department){
            $this->department = $department;
        }
        public function setLeader($leader){
            $this->leader = $leader;
        }
        public function displayDepartment(){
            echo '部署名:'.$this->department;
            echo "\n";
            echo '部長:'.$this->leader;
            echo "\n";
        }
    } 

    $sampleA = new Department();
    $sampleA->setName("サンプルA");
    $sampleA->setAdress("市ヶ谷");
    $sampleA->setNumber("080-XXXX-XXXX");
    $sampleA->setDepartment("人事");
    $sampleA->setLeader("高田");
    $sampleB = new Department();
    $sampleB->setName("サンプルB");
    $sampleB->setAdress("池袋");
    $sampleB->setNumber("090-XXXX-XXXX");
    $sampleB->setDepartment("総務");
    $sampleB->setLeader("田中");
    $sampleC = new Department();
    $sampleC->setName("サンプルC");
    $sampleC->setAdress("新宿");
    $sampleC->setNumber("070-XXXX-XXXX");
    $sampleC->setDepartment("営業");
    $sampleC->setLeader("高橋");

    $companys = array($sampleA,$sampleB,$sampleC);

    foreach($companys as $value){
        $value->displayCompany();
        $value->displayDepartment();
        echo "\n";
    }


 ?>